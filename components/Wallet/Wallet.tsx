import React, { useMemo, useState } from "react";
import styles from "./Wallet.module.css";
import Image from "next/image";

import { Modal, Pagination, Row, Col, PaginationProps } from "antd";
import { useAccountWolfis } from "../../hooks/useWolfis";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";
import wolfi from "../../public/img/wolfi-modal.svg";
import legend from "../../public/img/legend.svg";
import closeicon from "../../public/icons/close-modal.svg";

export interface WalletProps {
  isModalVisible?: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  refresh?: any;
}

const Title = () => {
  return <h1 className="modal-title">Your NFTs</h1>;
};

const getRarityScore = (
  attributes: {
    trait_type: string;
    value: string;
  }[]
) => {
  return attributes.find((attr) => attr.trait_type === "Rarity Score").value;
};

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <></>;
  }
  if (type === 'next') {
    return <></>;
  }
  return originalElement;
};

export default React.memo<WalletProps>(function Wallet({
  isModalVisible,
  handleOk,
  handleCancel,
  refresh,
}) {
  const [forceRefresh, setForceRefresh] = useState(0);
  const { elements, loading } = useAccountWolfis((refresh || 0) + (forceRefresh || 0));

  const [current, setCurrent] = useState(1);
  const [pagination, setPagination] = useState<number[]>([0, 6]);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setPagination([(page - 1) * pageSize, page * pageSize]);
  };

  const paginatedWolfies = useMemo(() => {
    return elements.slice(pagination[0], pagination[1]);
  }, [elements, pagination]);

  const retry = () => setForceRefresh(current => ++current);

  return (
    <Modal
      title={<Title />}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleOk}
      cancelButtonProps={{
        icon: <div className={`${styles["modal-button"]} ${styles["reload"]}`}>RELOAD</div>,
        size: "small",
        onClick: retry
      }}
      okButtonProps={{
        icon: <div className={styles["modal-button"]}>OK</div>,
        size: "small"
      }}
      closeIcon={
        <div className="close-modal-icon">
          <Image src={closeicon} height="30" />
        </div>
      }
      width={650}
    >
      <Image src={wolfi} />
      {loading ? (
        <p>Getting your token URIs...</p>
      ) : elements.length ? (
        <>
          <div className={styles["wolfi-card-container"]}>
            {paginatedWolfies.map((wolfi, index) => (
              <ImageWithLoader
                key={index}
                src={wolfi.image}
                className={`${styles["wolfi-card"]} ${
                  styles[getRarityScore(wolfi.metadata.attributes)]
                }`}
                forceRemount={() => window.location.reload()}
              />
            ))}
          </div>
          <Pagination
            defaultCurrent={1}
            total={elements.length}
            current={current}
            pageSize={6}
            onChange={handlePageChange}
            itemRender={itemRender}
          />
        </>
      ) : (
        "You don't have a Wolfi yet. Await for launch and get a Wolfi!"
      )}

      <div className="legend-container">
        <Image src={legend} />
      </div>
    </Modal>
  );
});
