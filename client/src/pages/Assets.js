import React from 'react';
import '../style/Assets.css';
import web3 from 'web3';

export default function Assets({assetsData}) {  
  return (<ul>
    {
      assetsData.map((el) => {
        let currentPrice;
        if(el.seaport_sell_orders){
          currentPrice = web3.utils.fromWei(el.seaport_sell_orders[0].current_price, "ether")
          currentPrice = Number(currentPrice).toFixed(2)
        }         
  
        return (
        <li key={el.token_id} className="asset">
          <a href="#" >
            <div className='thumbnail-wrapper'>
              <img src={el.image_thumbnail_url} alt="asset" className='thumbnail'/>
            </div>
            <div className='asset-info-wrapper'>
              <div className='info-top'>
                <div className='token-id'>{el.token_id}</div>
              </div>
              <div className='info-bottom'>
                <div className='current-price'>{currentPrice ? `${currentPrice} ETH` : ""}</div>
              </div>
            </div>
            
          </a>          
        </li>)
      })
    }
  </ul>)
}