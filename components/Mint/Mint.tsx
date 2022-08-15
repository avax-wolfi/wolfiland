import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import max from "../../public/img/max.svg";
import min from "../../public/img/min.svg";
import connectWallet from "../../public/img/connect-wallet.svg";
import mintNow from "../../public/icons/mint now 1.png";
import launchingSoon from "../../public/icons/launching-soon.png";

import wolfiLand from "../../public/icons/logo big 1.svg";

import styles from "./Mint.module.css";
import Pad from "../Pad";
import { useWeb3React } from "@web3-react/core";
import { formatEther, formatUnits, parseEther } from "@ethersproject/units";
import { TransactionResponse } from "@ethersproject/providers";
import {
  useMintingContract,
  usePriceCalculatorContract,
} from "../../hooks/useContract";
import { useTransactionAdder } from "../../state/transactions/hooks";
import { BigNumber } from "ethers";
import { calculateGasMargin } from "../../utils";
import { useConnect } from "../../hooks/useConnect";
import { connectorsByName } from "../../pages/_app";
import Wallet from "../Wallet/Wallet";
import Link from "next/link";
import { ChainId } from "@pangolindex/sdk";

export interface ConnectWalletProps {}

const Balance = ({ forceRefresh }: { forceRefresh?: number }) => {
  const { account, library, chainId } = useWeb3React();

  const [balance, setBalance] = useState();
  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(undefined);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId, forceRefresh]); // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <div>
      <p>
        {account ? (
          <span>Balance: </span>
        ) : (
          <span>Connect your wallet to see your balance.</span>
        )}
        <span>
          {balance === null
            ? "Error"
            : balance
            ? `AVAX ${(+formatEther(balance)).toFixed(4)}`
            : ""}
        </span>
      </p>
    </div>
  );
};

export default React.memo<ConnectWalletProps>(function ConnectWallet() {
  const {
    activate,
    activatingConnector,
    connector,
    context,
    error,
    setActivatingConnector,
    triedEager,
  } = useConnect();
  const currentConnector = connectorsByName["Connect With Metamask"];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;

  const [quantity, setQuantityToMint] = useState(1);
  const { chainId, account, library } = useWeb3React();
  const mintingContract = useMintingContract();
  const priceCalculatorContract = usePriceCalculatorContract();
  const addTransaction = useTransactionAdder();

  const [totalSupply, setTotalSupply] = useState("0");
  const [cost, setCost] = useState("0");
  const [totalCost, setTotalCost] = useState("0");
  const [feedback, setFeedback] = useState("");
  const [forceRefresh, setForceRefresh] = useState(0);

  const [showWalletModal, setShowWalletModal] = useState(false);

  const [, setAttemptingMint] = useState<boolean>(false); // clicked mint

  const [, setLastMintHash] = useState<string>("");

  const getData = useCallback(async () => {
    setTotalSupply(await mintingContract.totalSupply());
    setCost(formatEther(await priceCalculatorContract.getWolfiPriceInAvax()));
  }, [mintingContract, priceCalculatorContract]);

  const mint = async () => {
    if (!chainId || !library || !account) return;

    let estimate,
      method: (...args: any) => Promise<TransactionResponse>,
      args: Array<string | string[] | number>,
      value: BigNumber | null;
    estimate = mintingContract.estimateGas.mint;
    method = mintingContract.mint;
    args = [quantity.toString()];
    value = BigNumber.from(parseEther((+cost * quantity).toString()));

    setAttemptingMint(true);
    setFeedback("Minting your NFTs...");
    await estimate(...args, value ? { value } : {})
      .then((estimatedGasLimit) => {
        return method(...args, {
          ...(value ? { value } : {}),
          gasLimit: calculateGasMargin(estimatedGasLimit),
        }).then(async (response) => {
          addTransaction(response, {
            summary: `Mint ${quantity} Wolfi ${
              quantity > 1 ? "Tokens" : "Token"
            }`,
          });

          await response.wait();

          setAttemptingMint(false);
          setFeedback(
            `Nice, You just minted ${quantity} ${
              quantity > 1 ? "NFTs" : "NFT"
            }!`
          );
          setLastMintHash(response.hash);
          setShowWalletModal(true);
          setForceRefresh((current) => ++current);
        });
      })
      .catch((error) => {
        setForceRefresh((current) => ++current);
        setAttemptingMint(false);
        // we only care if the error is something _other_ than the user rejected the tx
        if (error?.code !== 4001) {
          console.error(error, ": ERROR");
          setFeedback(error.data?.message || error.message);
        } else {
          setFeedback("Something went wrong when attempting to mint")
        }
      });

    getData();
  };

  useEffect(() => {
    if (chainId) {
      getData();
    }
  }, [chainId]);

  useEffect(() => {
    setTotalCost((+cost * quantity).toString());
  }, [cost, quantity]);

  const handleChangeQuantity = useCallback((event) => {
    const {
      target: { value: quantity },
    } = event;
    if (!!quantity && quantity > 0) {
      setQuantityToMint(quantity);
    }
  }, []);

  const handleaAddQuantity = () => {
    return setQuantityToMint((current) => ++current);
  };
  
  const handleSubstractQuantity = () => {
    return (
      !!quantity && quantity > 1 && setQuantityToMint((current) => --current)
    );
  };

  return (
    <>
     <Wallet
        isModalVisible={showWalletModal}
        handleOk={() => setShowWalletModal(false)}
        handleCancel={() => setShowWalletModal(false)}
        refresh={forceRefresh}
      />
     <div className={styles["container"]}>
      <div className={styles["logotype-desc"]}>
        <Image src={wolfiLand} alt="WolfiLand" />
        <Pad amt={20} row />
        <Balance />
      </div>
      <Pad amt={40} />
      <div className={styles["min-max"]}>
        <Image src={max} alt="+" onClick={handleaAddQuantity} />
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          step="1"
          className={`${styles["hide-arrows"]} ${styles["no-borders"]} ${styles["fjalla-md"]}`}
          onChange={handleChangeQuantity}
        />
        <Image src={min} alt="-" onClick={handleSubstractQuantity} />
      </div>
      <Pad amt={40} />
      {account ? (
        chainId === ChainId.FUJI ?  <Image src={mintNow} alt="Mint" onClick={mint} style={{cursor: 'pointer'}}/>
        : <Link href='https://twitter.com/wolfilandnfts'>
          <Image src={launchingSoon} alt="Launching Soon!" style={{cursor: 'pointer'}} />
        </Link>
      ) : (
        <Image
          src={connectWallet}
          alt="Connect your Wallet"
          onClick={() => {
            setActivatingConnector(currentConnector);
            activate(connectorsByName["Connect With Metamask"]);
          }}
        />
      )}
      <Pad amt={20} />
      <div className={styles["cost"]}>
        {account ? (
          <>
            <span>Actual Cost: {(+totalCost).toFixed(4)} AVAX</span>
            <span>Total Minted: {formatUnits(totalSupply, "wei")} </span>
            
          </>
        ) : (
          <span>Connect a wallet to see more info.</span>
        )}
        {account && <span className={styles["view-wallet"]} onClick={() => setShowWalletModal(true)}>View Your Wallet</span>}
       <p className={`${styles["cost"]} ${styles["feedback"]}`}>{feedback}</p>
      </div>
    
    </div>
    </>
  );
});
