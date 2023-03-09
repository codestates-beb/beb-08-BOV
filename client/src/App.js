import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from "react";

import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import MintNFTPage from './pages/MintNFTPage';

import Header from './components/Header';
import Footer from './components/Footer';

import { WalletStatus } from './components/WalletStatus';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail' element={<DetailPage />}>
		 				<Route path=":id" />
		 			</Route>
        <Route path='*' />
      </Routes>
      <Footer />
      <WalletStatus />
      <MintNFTPage />
    </BrowserRouter>
    
  );
}

export default App;