import React from 'react';
import { Link} from 'react-router-dom';
import '../style/Assets.css';
import web3 from 'web3';

export default function Assets({assetsData, collTraits}) {  
  return (<ul>
    {
      assetsData.map((el, index) => {
        //가격 설정
        let currentPrice;
        if(el.seaport_sell_orders){
          currentPrice = web3.utils.fromWei(el.seaport_sell_orders[0].current_price, "ether")
          currentPrice = Number(currentPrice).toFixed(2)
        }
        
        //이미지 설정
        let profileImg;
        let imgUrl = ["image_thumbnail_url", "image_preview_url", "image_url", "image_original_url"];
        for(let i = 0; i < imgUrl.length; i++) {
          if(el[imgUrl[i]]) {
            // IPFS 주소인지 확인
            if(el[imgUrl[i]].startsWith("ipfs://")) {
              profileImg = el[imgUrl[i]].replace("ipfs://", "https://ipfs.io/ipfs/");
            } else  {
              profileImg = el[imgUrl[i]];
            }
            break;           
          }                  
        }
  
        return (
        <li key={el.token_id} className="asset">
          <Link to="/nftdetail" state={
            {assetData: assetsData[index], 
              collTraits: collTraits}
          }>
            <div className='thumbnail-wrapper'>
              <img src={profileImg} alt="asset" className='thumbnail'/>
            </div>
            <div className='asset-info-wrapper'>
              <div className='info-top'>
                <div className='token-id'>{el.token_id}</div>
              </div>
              <div className='info-bottom'>
                <div className='current-price'>{currentPrice ? `${currentPrice} ETH` : ""}</div>
              </div>
            </div> 
          </Link>
        </li>)
      })
    }
  </ul>)
}