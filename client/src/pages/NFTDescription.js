import React from 'react';

import '../style/NFTDescription.css';
import Attributes from './Attributes';
import NFTTitle from './NFTTitle';

const getCreatorNum = (addr) => {
  addr = addr.replace("0x", "");
  addr = addr.substring(0, 6);
  addr = addr.toUpperCase();

  return addr;
}

export default function NFTDescription({assetData, collTraits}) {
  return (
  <div className='nft-desc'>
    <NFTTitle iconName={"subject"} text={"Description"} className={"iconbox-border-bottom"}/>    
    <div className='creator'>
      <p className='creator-name-wrapper'>
        <span>By </span>
        <span className='creator-name common-nft-title'>{getCreatorNum(assetData.creator.address)}</span>
      </p>
      <p className='common-nft-desc'>{assetData.description}</p>
    </div>
    {Object.keys(collTraits).length !== 0 ? 
      (<>
      <NFTTitle iconName={"label"} text={"Attributes"}/>
      <div className='attribute-list'>
        <Attributes traits={assetData.traits} collTraits={collTraits}/>
      </div>
      </>) : <></>}
    <NFTTitle iconName={"vertical_split"} text={`About ${assetData.collection.name}`}/>
    <div className='about-desc'>
      <div className='about-img-wrapper'>
        <img src={assetData.collection.image_url}alt='collectionImg'/>
      </div>
      <p className='common-nft-desc'>{assetData.collection.description}</p>
    </div>
    <NFTTitle iconName={"ballot"} text={"Details"}/>
    <div className='details-desc common-nft-desc'>
      <ul>
        <li className='details-desc-wrapper'>Contract Address
        <span>{assetData.asset_contract.address}</span>
        </li>
        <li className='details-desc-wrapper'>Token ID
        <span>{assetData.token_id}</span>
        </li>
        <li className='details-desc-wrapper'>Token Standard
        <span>{assetData.asset_contract.schema_name}</span>
        </li>
        <li className='details-desc-wrapper'>Chain
        <span>Goerli</span>
        </li>
      </ul>
      
    </div>
  </div>
  )
}