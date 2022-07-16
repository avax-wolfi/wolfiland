import { Contract } from "@ethersproject/contracts";
import { ChainId } from "@pangolindex/sdk";
import { useMemo } from "react";
import {
  CLAIM_LAND_CRYPTO_SEAL_CONTRACT,
  CLAIM_LAND_HERO_CONTRACT,
  CRYPTO_SEALS,
  MINTING_CONTRACT,
  MINT_LAND_CONTRACTS,
  PRICE_CALCULATOR_CONTRACTS,
  STAKING_HERO,
} from "../constants";
import ERC20_ABI from "../constants/abis/erc20.json";
import RYTELL_NFT_MINTING_ABI from "../constants/abis/Rytell.json";
import CRYPTO_SEALS_ABI from "../constants/abis/cryptoSeals.json";
import CLAIM_LAND_HERO_ABI from "../constants/abis/claimLandHero.json";
import CLAIM_LAND_CRYPTO_SEAL_ABI from "../constants/abis/claimLandCryptoSeal.json";
import PRICE_CALCULATOR_ABI from "../constants/abis/priceCalculator.json";
import MINT_LANDS_ABI from "../constants/abis/theLandsOfRytell.json";
import HERO_STAKING_ABI from '../constants/abis/staking-hero.json'
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

export function useRytellMintingContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    MINTING_CONTRACT[chainId || ChainId.AVALANCHE],
    RYTELL_NFT_MINTING_ABI
  );
}

export function useCryptoSealsContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    CRYPTO_SEALS[chainId || ChainId.AVALANCHE],
    CRYPTO_SEALS_ABI
  );
}

export function useLandClaimingHeroContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    CLAIM_LAND_HERO_CONTRACT[chainId || ChainId.AVALANCHE],
    CLAIM_LAND_HERO_ABI
  );
}

export function useLandClaimingCryptoSealContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    CLAIM_LAND_CRYPTO_SEAL_CONTRACT[chainId || ChainId.AVALANCHE],
    CLAIM_LAND_CRYPTO_SEAL_ABI
  );
}

export function usePriceCalculatorContract(collectionNumber): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    PRICE_CALCULATOR_CONTRACTS[collectionNumber - 1][
      chainId || ChainId.AVALANCHE
    ],
    PRICE_CALCULATOR_ABI
  );
}

export function useMintLandContract(collectionNumber): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    MINT_LAND_CONTRACTS[collectionNumber - 1][chainId || ChainId.AVALANCHE],
    MINT_LANDS_ABI
  );
}

export function useHeroStakingContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(STAKING_HERO[chainId || ChainId.AVALANCHE], HERO_STAKING_ABI)
}
