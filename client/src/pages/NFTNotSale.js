import React from 'react';
import '../style/NFTNotSale.css';

export default function NFTNotSale() {
  return (
    <div className='nft-not-sale-main'>
      <div className='nft-not-sale-price-buy'>      
        <button className='nft-not-sale-buy-btn'>
          <i className='material-icons'>bolt</i>
          <span>Not available</span>
        </button>
      </div>        
    </div>
  )
}