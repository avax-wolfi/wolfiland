import { MaxUint256 } from "@ethersproject/constants";
import { TransactionResponse } from "@ethersproject/providers";
import { CAVAX, ChainId, CurrencyAmount, JSBI, TokenAmount } from "@pangolindex/sdk";
import { useCallback, useMemo } from "react";
import { useTokenAllowance } from "../data/Allowances";
import { useActiveWeb3React } from "../hooks";
import {
  useHasPendingApproval,
  useTransactionAdder,
} from "../state/transactions/hooks";
import { calculateGasMargin } from "../utils";
import { useTokenContract } from "./useContract";

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  amountToApprove?: CurrencyAmount & TokenAmount,
  spender?: string
): [ApprovalState, () => Promise<TransactionResponse | undefined>] {
  const { account, chainId } = useActiveWeb3React();
  const token = amountToApprove?.token ? amountToApprove.token : undefined;

  const currentAllowance = useTokenAllowance(
    token,
    account ?? undefined,
    spender
  );
  const pendingApproval = useHasPendingApproval(token?.address, spender);

  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
    if (amountToApprove.currency === CAVAX[chainId as ChainId.AVALANCHE || ChainId.AVALANCHE]) return ApprovalState.APPROVED;
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN;
    // amountToApprove will be defined if currentAllowance is
    return JSBI.lessThan(
      JSBI.BigInt(currentAllowance.raw.toString()),
      JSBI.BigInt(amountToApprove.raw.toString())
    )
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED;
  }, [amountToApprove, currentAllowance, pendingApproval, spender]);

  const tokenContract = useTokenContract(token?.address);
  const addTransaction = useTransactionAdder();

  const approve = useCallback(async (): Promise<
    TransactionResponse | undefined
  > => {
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error("approve was called unnecessarily");
      return undefined;
    }
    if (!token) {
      console.error("no token");
      return undefined;
    }

    if (!tokenContract) {
      console.error("tokenContract is null");
      return undefined;
    }

    if (!amountToApprove) {
      console.error("missing amount to approve");
      return undefined;
    }

    if (!spender) {
      console.error("no spender");
      return undefined;
    }

    let useExact = false;
    const estimatedGas = await tokenContract.estimateGas
      .approve(spender, MaxUint256)
      .catch(() => {
        // general fallback for tokens who restrict approval amounts
        useExact = true;
        return tokenContract.estimateGas.approve(
          spender,
          amountToApprove.raw.toString()
        );
      });

    return tokenContract
      .approve(
        spender,
        useExact ? amountToApprove.raw.toString() : MaxUint256,
        {
          gasLimit: calculateGasMargin(estimatedGas),
        }
      )
      .then((response: TransactionResponse) => {
        addTransaction(response, {
          summary: "Approve " + amountToApprove.currency.symbol,
          approval: { tokenAddress: token.address, spender: spender },
        });
        return response;
      })
      .catch((error: Error) => {
        console.debug("Failed to approve token", error);
        throw error;
      });
  }, [
    approvalState,
    token,
    tokenContract,
    amountToApprove,
    spender,
    addTransaction,
  ]);

  return [approvalState, approve];
}
