import { Contract } from "@ethersproject/contracts";
import { ChainId } from "@pangolindex/sdk";
import { useMemo } from "react";
import {
  MINTING_CONTRACT,
} from "../constants";
import ERC20_ABI from "../constants/abis/erc20.json";
import { abi as NFT_MINTING_ABI } from "../constants/abis/wolfi.json"
import { MULTICALL_ABI, MULTICALL_NETWORKS } from "../constants/multicall";
import { useActiveWeb3React } from "../hooks";
import { getContract } from "../utils";

// returns null on errors
function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export function useMulticallContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    chainId && MULTICALL_NETWORKS[chainId],
    MULTICALL_ABI,
    false
  );
}

export function uselMintingContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    MINTING_CONTRACT[chainId || ChainId.AVALANCHE],
    NFT_MINTING_ABI
  );
}