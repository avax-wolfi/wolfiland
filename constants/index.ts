import { ChainId, Token } from "@pangolindex/sdk";

export const NetworkContextName = "NETWORK";

export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";

export const MINTING_CONTRACT: { [chainId in ChainId]?: string } = {
  [ChainId.FUJI]: "0x6122F8cCFC196Eb2689a740d16c451a352740194",
  [ChainId.AVALANCHE]: "0x0ca68D5768BECA6FCF444C01FE1fb6d47C019b9f",
};

export const AVAX_RADI = {
  [ChainId.FUJI]: new Token(
    ChainId.FUJI,
    "0x24ad1A896cF3521b80D3ae428b3cA33902267250",
    18,
    "Rytell Liquidity",
    "RYTL"
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    "0xAa4f1ADB2bF0665Ab24eB742CbeFE1A13658d913",
    18,
    "Rytell Liquidity",
    "RYTL"
  ),
};

export const PRICE_CALCULATOR_CONTRACT: { [chainId in ChainId]?: string } =
  {
    [ChainId.FUJI]: "0xc45149AAD915DCEB6d068CdCeCa2e745E0a94911",
    [ChainId.AVALANCHE]: "0x85bE063565ee30ff031B20c8F9828683dEd8C6F1",
  };

export const STAKING_HERO = {
  [ChainId.FUJI]: '0xc7bA3f3dC4D0eb18914Ce946e2295bA09c118989',
  [ChainId.AVALANCHE]: '0xE0B05Eb50E8481e1685612cF0a16251Bc2f7A1b4'
}
