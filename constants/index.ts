import { ChainId, Token } from "@pangolindex/sdk";

export const NetworkContextName = "NETWORK";

export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";

export const MINTING_CONTRACT: { [chainId in ChainId]?: string } = {
  [ChainId.FUJI]: "0x6fe4947601D9926035C2eE85c9984a3f8331fE2E",
  [ChainId.AVALANCHE]: "0xbc3323468319cf1a2a9ca71a6f4034b7cb5f8126",
};
