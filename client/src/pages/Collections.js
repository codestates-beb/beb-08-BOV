import React from 'react';
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../style/Collections.css';

import { getBundles } from '../apis/opensea';

export default function Collections() {
  const [bundlesData, setBundlesData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  let collectionList = [];

  const clickPagenation = (dir) => {
    if(dir === 0) setCurrentPage(currentPage - 1);
    else if(dir === 1) setCurrentPage(currentPage + 1);
  }

  useEffect (() => {
    (async () => {
      //collections 정보 가져오기
      getBundles(currentPage).then((res) => {
        setBundlesData([...res.data.bundles]);
        console.log("bundles", res.data.bundles);  
      })  
    })();       
  }, [currentPage])  

  console.log("test", bundlesData)
  if(!bundlesData) return <></>;

  return (
  <div className='collections-main'>
    <ul>
      {bundlesData.map((el) => {
        //collection 있는지 체크
        if(el.assets.length === 0) return <></>
        //collection 중복 체크
        const collectionName = el.assets[0].collection.name;
        if(collectionList.includes(collectionName)) return <></> ;
        else collectionList.push(collectionName);

        return (
        <li className='collections-main-coll'>
          <Link to="/detail" state={
            {collectionSlug: el.assets[0].collection.slug, 
            collectionAddr: el.assets[0].asset_contract.address}
          }>
            <div className='collections-col-img-wrapper'>
              {el.assets[0].collection.image_url ? <img src={el.assets[0].collection.image_url} alt='collectionImg' className='collection-img'/> : <></>}
            </div>
            <div className='collection-info-wrapper'>
              <div className='collection-info-name'>{el.assets[0].collection.name}</div>              
            </div>
          </Link>          
        </li>)
      })}
    </ul>
    <div>
      <div>
        <a href='#' onClick={()=> clickPagenation(0)}>prev</a>
      </div>
      <div>
        <a href='#' onClick={()=> clickPagenation(1)}>next</a>
      </div>
    </div>
  </div>)
}