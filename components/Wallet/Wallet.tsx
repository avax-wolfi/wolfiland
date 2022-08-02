import React, { useMemo, useState } from "react";
import styles from "./Wallet.module.css";

import { Modal, Pagination, Row, Col } from "antd";
import { useAccountWolfis } from "../../hooks/useWolfis";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

export interface WalletProps {
  isModalVisible?: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  refresh?: any;
}

export default React.memo<WalletProps>(function Wallet({
  isModalVisible,
  handleOk,
  handleCancel,
  refresh,
}) {
  const { elements, loading } = useAccountWolfis(refresh);

  const [current, setCurrent] = useState(1);
  const [pagination, setPagination] = useState<number[]>([0, 6]);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setPagination([(page - 1) * pageSize, page * pageSize]);
  };

  const paginatedWolfies = useMemo(() => {
    return elements.slice(pagination[0], pagination[1]);
  }, [elements, pagination]);

  return (
    <Modal
      title="Your NFTs"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {loading ? (
        <p>Getting your token URIs...</p>
      ) : (
        <>
          <div className={styles["wolfi-card-container"]}>
            {paginatedWolfies.map((wolfi, index) => (
              <ImageWithLoader
                key={index}
                src={wolfi.image}
                className={styles["wolfi-card"]}
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
          />
        </>
      )}
    </Modal>
  );
});
