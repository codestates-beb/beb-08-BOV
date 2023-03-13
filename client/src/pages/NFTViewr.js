import React, { useState, useEffect } from "react";
import Web3 from "web3";
import erc721Abi from "../erc721Abi"
import { useWeb3React } from '@web3-react/core'
import axios from "axios";

const NFTViewer = () => {
  const [nftData, setNFTData] = useState([]);
  const [newErcAddr, setNewErcAddr] = useState();
  const [erc721list, setErc721lst] = useState([]);
  const { account } = useWeb3React();

  const mypageUrl = `/mypage/${account}`;

  useEffect(() => {
    async function fetchNFTData() {
      const web3 = new Web3('https://goerli.infura.io/v3/f57e648b131f4c7aacbf4c3945b271d1');
      const contractABI = erc721Abi;
      const contractAddress = '0xf02F81f55Ef7A574dA5e73eA32589Eb8668F0140';
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      
      console.log(mypageUrl);

      const ownerAddress = '0x93992FD5D9527532fdEcD55b169Bd4d11Fc92726';
      const balance = await contract.methods.balanceOf(ownerAddress).call();
      
      const totalSupply = await contract.methods.totalSupply().call();
      const name = await contract.methods.name().call();
      const symbol = await contract.methods.symbol().call();

      let arr = [];
      for(let i = 1;i<=totalSupply;i++){
        arr.push(i);
      }

      for(let tokenId of arr){
        let tokenOwner = await contract.methods.ownerOf(tokenId).call();
        console.log("tokenOWner!!",tokenOwner);
        if(tokenOwner === ownerAddress){
          let tokenURI = await contract.methods.tokenURI(tokenId).call();
          setErc721lst((prevState) => {
            return [...prevState,{name,symbol,tokenId,tokenURI}];
          });
        }
      }

    }
    fetchNFTData();
  }, []);
  return (
    <div>
      <h1>My NFT Collection</h1>
      <div className="erc721list1">
            {erc721list.map((token) => {
                return (
                    <div className="erc721token1" key = {token.tokenId}>
                        <img src={token.tokenURI} width={300} />
                        <div>
                        <span className="name">{token.name}</span>(
                        <span className="symbol">{token.symbol}</span>)

                        <div className="nft">id: {token.tokenId}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default NFTViewer;