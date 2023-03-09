import React from 'react';
import '../style/DetailPageInfo1.css';

export default function DetailPageInfo1({collectionData}) {
  return (
    <>
      <div className='items-wrapper info-display'>
        <span className='info1-subject'>Items</span>
        <span className='info1-value'>{collectionData.stats.total_supply}</span>
      </div>
      <div className='created-wrapper info-display'>
        <span className='info1-subject'>Created</span>
        <span className='info1-value'>{new Date(collectionData.created_date).toLocaleDateString("en-us", { year: "numeric", month: "short" })}</span>
      </div>
    </>
  )
}