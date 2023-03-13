import React from 'react';
import web3 from 'web3';
import '../style/NFTSale.css';

const getTime = (time) => {
  let usTime = new Date(time);
  let kstTime = usTime.getTime() + 9 * 60 * 60 * 1000;
  kstTime = new Date(kstTime);
  return kstTime.toLocaleString("en-US");
}

export default function NFTTSale({assetData}) {
  let currentPrice = web3.utils.fromWei(assetData.seaport_sell_orders[0].current_price, "ether")
  currentPrice = Number(currentPrice).toFixed(4);
  return (
    <div className='nft-sale-main'>
      <div className="nft-sale-end common-nft-iconbox">
        <i className='material-icons'>schedule</i>
        <div className='nft-sale-end-date'>Sale ends {getTime(assetData.seaport_sell_orders[0].closing_date)}</div>
      </div>
      <div className='nft-sale-price-buy'>
        <div>
          <div className='common-nft-desc'>Current price</div>
          <div className='common-nft-curr-price'>{currentPrice} ETH</div>
        </div>        
        <button className='nft-sale-buy-btn'>
          <i className='material-icons'>bolt</i>
          <span>Buy now</span>
        </button>
      </div>        
    </div>
  )
}