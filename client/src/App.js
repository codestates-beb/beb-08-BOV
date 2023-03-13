import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from "react";

import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import NFTDetailPage from './pages/NFTDetailPage';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollReset from './components/ScrollReset';

import { WalletStatus } from './components/WalletStatus';
import { MintNFTPage } from './pages/mintNFTPage'; // 시작은 대문자로 해야 정상적으로 적용된다. 

function App() {

  return (
    <BrowserRouter>
      <ScrollReset /> {/*router 이동시 스크롤 리셋 */}
      <Header getAccount/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/MintNFTPage' element={<MintNFTPage />} /> 
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail' element={<DetailPage />}>
		 				<Route path=":id" />
		 			</Route>
        <Route path='*' />        
        <Route path='/nftdetail' element={<NFTDetailPage />} />     
      </Routes>
      <Footer />
      <WalletStatus />
    </BrowserRouter>
  );
}

export default App;