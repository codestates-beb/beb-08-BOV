// MainPage.js
import React from 'react';
import Collections from './Collections';
import DetailPage from './DetailPage';



export default function MainPage() {
  
  return (
  <div>
    <Collections />
    {/* <DetailPage collectionSlug={"pvp-blackhole"} 
    collectionAddr={"0xf4910c763ed4e47a585e2d34baa9a4b611ae448c"}/> */}
  </div>);
}