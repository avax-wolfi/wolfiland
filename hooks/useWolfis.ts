import { useCallback, useEffect, useState } from "react";
import { useActiveWeb3React } from "../hooks";
import { fromIpfsToUrl } from "../utils";
import { useMintingContract } from "./useContract";

export function useAccountWolfis(forceRefresh?: number) {
  const { chainId, account } = useActiveWeb3React();
  const mintingContract = useMintingContract();
  const [loading, setLoading] = useState(false);
  const [elements, setElements] = useState<any[]>([]);

  const getData = useCallback(async () => {
    if (account) {
      setLoading(true);
      try {
        const mintedWolfies = (
          await mintingContract?.walletOfOwner(account)
        ).map((wolfi: any) => ({
          wolfi,
        }));

        const result = mintedWolfies.reverse();

        const ipfs = (
          await Promise.all(
            result.map((token: { wolfi: string }) => {
              return mintingContract?.tokenURI(token.wolfi);
            })
          )
        ).map(fromIpfsToUrl);

        const metadatas = await Promise.all(
          ipfs.map((ipfsuri: string) => fetch(ipfsuri))
        );

        const jsonmetadatas = await Promise.all(
          metadatas.map((metadata: any) => metadata.json())
        );

        const images = jsonmetadatas.map((jsonmeta: any) =>
          fromIpfsToUrl(jsonmeta.image)
        );

        const imagesWithIpfsUri = ipfs.map(
          (ipfsuri: string, index: number) => ({
            image: images[index],
            ipfsuri,
            metadata: jsonmetadatas[index],
          })
        );

        setElements(imagesWithIpfsUri);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
  }, [mintingContract, account]);

  useEffect(() => {
    if (chainId) {
      getData();
    }
  }, [chainId, account, getData, forceRefresh]);

  return { elements, loading };
}
