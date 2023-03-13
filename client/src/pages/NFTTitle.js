import React from 'react';
import '../style/NFTTitle.css';

//@param className - iconbox-border-top, iconbox-border-bottom
export default function NFTTitle({iconName, text, className}) {
  let wrapperClass = 'nft-detail-title common-nft-iconbox ';
  if(className) wrapperClass += className;
  else wrapperClass += "iconbox-border-top iconbox-border-bottom";

  return (
    <div className={wrapperClass}>
      <i className='material-icons'>{iconName}</i>
      <div className='desc-title common-nft-title'>{text}</div>
    </div>
  )
}