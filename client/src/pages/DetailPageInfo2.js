import React from 'react';
import '../style/DetailPageInfo2.css';

export default function DetailPageInfo2({collectionData}) {
  return (
    <>
      <div className='totalvolue-wrapper info2-display'>
        <div className='info2-value'>{collectionData.stats.total_volume.toFixed(4)} ETH</div>
        <div className='info2-subject'>total volume</div>
      </div>
      <div className='floorprice-wrapper info2-display'>
        <div className='info2-value'>{collectionData.stats.floor_price.toFixed(4)} ETH</div>
        <div className='info2-subject'>floor price</div>
      </div>
      <div className='numowners-wrapper info2-display'>
        <div className='info2-value'>{collectionData.stats.num_owners}</div>
        <div className='info2-subject'>owners</div>
      </div>
    </>
  )
}