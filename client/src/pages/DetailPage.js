import React from 'react';
import { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import '../style/DetailPage.css';
import {delay, changeParam} from '../utils/common';
import DetailPageInfo1 from './DetailPageInfo1';
import DetailPageInfo2 from './DetailPageInfo2';
import NFTDetailPage from './NFTDetailPage';
import Assets from './Assets';
//import {getContractMetadata, getNftsForContract, getNftSales,} from '../apis/alchemy';
import {getCollection, getAssets} from '../apis/opensea';

export default function DetailPage(props) {
  const [collectionData, setCollectionData] = useState();
  const [assetsData, setAssetsData] = useState(); 

  //props 설정
  const location = useLocation();
  let {collectionSlug, collectionAddr} = props;  
  if(!collectionSlug || !collectionAddr) {
    if(location.state) {
      ({collectionSlug, collectionAddr} = location.state);
    }
  }
  console.log(collectionSlug,collectionAddr)
  useEffect (() => {
    //0x6447F7d21f19af6c11824B06E3a6618542ceDF33 //주소창에 뜨는 주소
    //0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9 //이더스캔에 검색되는 주소
    // getNftsForContract('0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9').then((res) => {
    //   //setnftsData(res);
    //   console.log("NFT", res);
    // }) 

    (async () => {
      //collection 정보 가져오기
      getCollection(collectionSlug).then((res) => {
        setCollectionData(res.data.collection);
        console.log("colll", res.data.collection);       
      })
      await delay(1100);
      //NFT 정보 가져오기
      getAssets(collectionAddr, collectionSlug).then((res) => {
        setAssetsData(res.data.assets);
        console.log("assets", res.data.assets);
      })      
    })();       
  }, [])  

  if(!collectionData 
    ) return <></>

  // if(!assetsData) return <></>
  // return (
  //   <>
  //     <NFTDetailPage assetData={assetsData[1]} collTraits={collectionData.traits}/>
  //   </>
  // )  

  return(
  <div id='detailPage'>
    <section id="top">
      <div className='banner'>
        {collectionData.banner_image_url ? 
        <img src={changeParam(collectionData.banner_image_url, 'w', 3840)} alt="banner"/> :
        <></>}
      </div>
    </section>
    <section id="middle">
      <div className="col-mainImg-wrapper">
        {collectionData.image_url ? <img src={collectionData.image_url} alt='mainImg'/> : <></>}
      </div>
      <div className='name'>{collectionData.name}</div>
      <div className='info1'>
        <DetailPageInfo1 collectionData={collectionData}/>
      </div>     
      <div className='disc-wrapper'>
        <p>{collectionData.description}</p>
      </div>
      <div className='info2'>
        <DetailPageInfo2 collectionData={collectionData}/>
      </div>
    </section>
    <section id="bottom">      
      <div className='tab'>
        <div className='title'>
          <div className='title-items title-focus'>Items</div>
        </div>
        <div className='items'>
          {assetsData ? <Assets assetsData={assetsData} collTraits={collectionData.traits}/> : <></> }          
        </div>
      </div>      
    </section>
  </div>
  );
}