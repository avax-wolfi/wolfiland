import { ChainId, Token } from "@pangolindex/sdk";

export const NetworkContextName = "NETWORK";

export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";

export const MINTING_CONTRACT: { [chainId in ChainId]?: string } = {
  [ChainId.FUJI]: "0x6fe4947601D9926035C2eE85c9984a3f8331fE2E",
  [ChainId.AVALANCHE]: "0xAE69fB034436b09584bF236873CbEe8b2E57aF00",
};

export const PRICE_CALCULATOR_CONTRACT: { [chainId in ChainId]?: string } =
  {
    [ChainId.FUJI]: "0x43De6f375EB9cb618F8Abd2758f730073A8477E0",
    [ChainId.AVALANCHE]: "0x2800f8a7F5b02EBb40cA830BE88F4101364bc50c",
  };
