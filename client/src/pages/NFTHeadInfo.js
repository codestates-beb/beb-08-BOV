import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NFTHeadInfo.css';

export default function NFTHeadInfo ({assetData}) {
  return (
  <div className='nft-head-info-main'>
    <div className='head-info-coll-name'>
      <Link to="/detail" state={
        {collectionSlug: assetData.collection.slug, 
        collectionAddr: assetData.asset_contract.address}
      }>{assetData.collection.name}</Link>
    </div>
    <h1 className='head-info-token-id'>#{assetData.token_id}</h1>
    <div className='head-info-owned'>Owned by {assetData.asset_contract.owner}</div>
    {assetData.rarity_data ? <div className='head-info-rank'>Rarity rank: {assetData.rarity_data.rank} / {assetData.rarity_data.max_rank}</div> : <></>}
  </div>
  )
}