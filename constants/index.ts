import { ChainId, Token } from "@pangolindex/sdk";

export const NetworkContextName = "NETWORK";

export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";

export const MINTING_CONTRACT: { [chainId in ChainId]?: string } = {
  [ChainId.FUJI]: "0x325395cb508f1d2faCB49548A8C44A3f6283c9ba",
  [ChainId.AVALANCHE]: "0x015B65f1bF16Ed3982fD7438498fF2aB193deB2C",
};

export const PRICE_CALCULATOR_CONTRACT: { [chainId in ChainId]?: string } =
  {
    [ChainId.FUJI]: "0x43De6f375EB9cb618F8Abd2758f730073A8477E0",
    [ChainId.AVALANCHE]: "0x2800f8a7F5b02EBb40cA830BE88F4101364bc50c",
  };
