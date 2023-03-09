import { Network, Alchemy, NftSaleMarketplace } from "alchemy-sdk";
//Alchemy 설정
const settings = {
  apiKey: "16invmDLK4AvKoyn1A8aQeG7fdrbUzLp", // Alchemy API Key.
  network: Network.Goerli, // network.
  //network: Network.ETH_MAINNET
};
const alchemy = new Alchemy(settings);

//컨트랙트(collection) 정보 얻기
export const getContractMetadata = async (addr) => {
  const data = await alchemy.nft.getContractMetadata(addr);
  return data;    
}

//컨트랙트(collection)에서 생성된 NFT토큰 목록, 정보 얻기
export const getNftsForContract = async (addr) => {
  const data = await alchemy.nft.getNftsForContract(addr, {
    omitMetadata: false,
    //limit: 100 //100 최대
  });
  return data;
}

export const getNftSales = async (addr, tokenId) => {
  const data = await alchemy.nft.getNftSales({
    fromBlock: 0,
    toBlock: 'latest',
    marketplace: NftSaleMarketplace.SEAPORT,
    contractAddress: addr,
    tokenId: 200,
  });

  return data;
}

