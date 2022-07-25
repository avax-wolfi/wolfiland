  import React, { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'
import max from '../../public/img/max.svg'
import min from '../../public/img/min.svg'
import connectWallet from '../../public/img/connect-wallet.svg'
import wolfiLand from '../../public/icons/logo big 1.svg'

import styles from './ConnectWallet.module.css'
import Pad from '../Pad'
import { useWeb3React } from '@web3-react/core'
import { formatEther } from "@ethersproject/units";
import { TransactionResponse } from "@ethersproject/providers";
import { useMintingContract } from '../../hooks/useContract'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { BigNumber } from "ethers";
import { calculateGasMargin } from '../../utils'

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
          ? `AVAX ${formatEther(balance)}`
          : ""}
      </span>
      </p>
    </div>
  );
};

export default React.memo<ConnectWalletProps>(function ConnectWallet() {
  const [quantity, setQuantityToMint] = useState(1);
  const { chainId, account, library } = useWeb3React();
  const mintingContract = useMintingContract();
  const addTransaction = useTransactionAdder();

  const [totalSupply, setTotalSupply] = useState("0");
  const [cost, setCost] = useState("0");
  const [feedback, setFeedback] = useState("");
  const [forceRefresh, setForceRefresh] = useState(0);

  const [, setAttemptingMint] = useState<boolean>(false); // clicked mint

  const [, setLastMintHash] = useState<string>("");

  const getData = useCallback(async () => {
    setTotalSupply(await mintingContract.totalSupply());
    
    // TODO: query price calculator for this
    // setCost(await mintingContract.MINT_PRICE());
  }, [mintingContract]);

  const mint = async () => {
    if (!chainId || !library || !account) return;

    let estimate,
      method: (...args: any) => Promise<TransactionResponse>,
      args: Array<string | string[] | number>,
      value: BigNumber | null;
    estimate = mintingContract.estimateGas.mint;
    method = mintingContract.mint;
    args = [quantity.toString()];
    value = BigNumber.from((+cost * quantity).toString());

    setAttemptingMint(true);
    setFeedback("Minting your NFTs...");
    await estimate(...args, value ? { value } : {})
      .then((estimatedGasLimit) => {
        return method(...args, {
          ...(value ? { value } : {}),
          gasLimit: calculateGasMargin(estimatedGasLimit),
        }).then(async (response) => {
          addTransaction(response, {
            summary: `Mint ${quantity} Rytell ${
              quantity > 1 ? "Heroes" : "Hero"
            }`,
          });

          await response.wait();

          setAttemptingMint(false);
          setFeedback(
            `Nice, You just minted ${quantity} ${
              quantity > 1 ? "NFTs" : "NFT"
            }!`
          );
          setForceRefresh((current) => ++current);

          setLastMintHash(response.hash);
        });
      })
      .catch((error) => {
        setForceRefresh((current) => ++current);
        setAttemptingMint(false);
        setFeedback("Something went wrong when attempting to mint");
        // we only care if the error is something _other_ than the user rejected the tx
        if (error?.code !== 4001) {
          console.error(error, ": ERROR");
        }
      });

    getData();
  };
useEffect(() => {
    if (chainId) {
      getData();
    }
  }, [chainId]);

  return (
    <div className={styles['container']}>
      <div className={styles['logotype-desc']}>
        <Image src={wolfiLand} alt="WolfiLand" />
        <Pad amt={20} row />
        <Balance />
      </div>
     <Pad amt={40} />
      <div className={styles['min-max']}>
        <Image src={max} alt="+" />
        <Image src={min} alt="-" />
      </div>
      <Pad amt={40} />
        <Image src={connectWallet} alt="Connect your Wallet" />
       <Pad amt={20} />
      <div className={styles['cost']}>
        <span>Min Cost:2 AVAX</span>
        <span>Total Minted:XXXX</span>
      </div>
    </div>
  )
})
