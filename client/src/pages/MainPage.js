// MainPage.js
import React from 'react';
import { useState, useEffect} from "react";
import DetailPage from './DetailPage';

import {getCollections} from '../apis/opensea';

export default function MainPage() {
  console.log("2222")
  useEffect (() => {
    //0x6447F7d21f19af6c11824B06E3a6618542ceDF33 //주소창에 뜨는 주소
    //0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9 //이더스캔에 검색되는 주소
    // getNftsForContract('0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9').then((res) => {
    //   //setnftsData(res);
    //   console.log("NFT", res);
    // }) 

    (async () => {
      //collections 정보 가져오기
      getCollections(0, 300).then((res) => {
        //setCollectionData(res.data.collection);
         
        let collections = res.data.collections;
        collections = collections.filter((el) => {
          return el.stats.total_volume > 0;
        })
        console.log("collss", collections);  
      })  
    })();       
  }, [])  
  return (
  <div>
    메인 페이지
    <DetailPage collectionSlug={"pvp-blackhole"} 
    collectionAddr={"0xf4910c763ed4e47a585e2d34baa9a4b611ae448c"}/>
  </div>);
}