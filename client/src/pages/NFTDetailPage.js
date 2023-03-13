import React from 'react';
import { useLocation } from 'react-router-dom';

import '../style/NFTDetailPage.css';
import NFTDescription from './NFTDescription';
import NFTHeadInfo from './NFTHeadInfo';
import NFTTSale from './NFTSale';
import NFTNotSale from './NFTNotSale';

export default function NFTDetailPage(props) {  
  //props 설정
  const location = useLocation();
  let {assetData, collTraits} = props;  
  if(!assetData || !collTraits) {
    if(location.state) {
      ({assetData, collTraits} = location.state);
    }
  } 
  
  //img 설정
  let profileImg;
  let imgUrl = ["image_original_url", "image_preview_url", "image_thumbnail_url", "image_url"];
  for(let i = 0; i < imgUrl.length; i++) {
    if(assetData[imgUrl[i]]) {
      // IPFS 주소인지 확인
      if(assetData[imgUrl[i]].startsWith("ipfs://")) {
        profileImg = assetData[imgUrl[i]].replace("ipfs://", "https://ipfs.io/ipfs/");
      } else  {
        profileImg = assetData[imgUrl[i]];
      }
      break;
    } 
  }
  // //image_original_url
  // if(assetData.image_original_url) {
  //   // IPFS 주소인지 확인
  //   if(assetData.image_original_url.startsWith("ipfs://")) {
  //     profileImg = assetData.image_original_url.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   } else  {
  //     profileImg = assetData.image_original_url;
  //   }
  // } 
  // //image_preview_url
  // else if(assetData.image_preview_url) {
  //   if(assetData.image_preview_url.startsWith("ipfs://")) {
  //     profileImg = assetData.image_preview_url.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   } else  {
  //     profileImg = assetData.image_preview_url;
  //   }
  // }
  // //image_thumbnail_url
  // else if(assetData.image_thumbnail_url) {
  //   if(assetData.image_thumbnail_url.startsWith("ipfs://")) {
  //     profileImg = assetData.image_thumbnail_url.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   } else  {
  //     profileImg = assetData.image_thumbnail_url;
  //   }
  // }
  // //image_url
  // else if(assetData.image_thumbnail_url) {
  //   if(assetData.image_thumbnail_url.startsWith("ipfs://")) {
  //     profileImg = assetData.image_thumbnail_url.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   } else  {
  //     profileImg = assetData.image_thumbnail_url;
  //   }
  // }

  //console.log(1111, assetData);
  return (
  <div id="NFT-detail-page">
    <section className='NFT-top'>
      <section className='NFT-left'>
        <div className='img-org'>
          <div className='img-org-header'></div>
          <div className='img-org-wrapper'>
            <img src={profileImg} alt='assetImage'/>
          </div>
        </div>
        <div>
          <NFTDescription assetData={assetData} collTraits={collTraits}/>
        </div>               
      </section>
      <section className='NFT-right'>
        <div className='nft-head-info'>
          <NFTHeadInfo assetData={assetData} />
        </div>
        <div className='nft-sale'>
          {assetData.seaport_sell_orders ? <NFTTSale assetData={assetData}/> : <NFTNotSale />}          
        </div>
      </section>
    </section>
  </div>)
}