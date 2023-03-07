import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from "react";

import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [account, setAccount] = useState("");
  const getAccount = async () => {
    try{
      if(window.ethereum){
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account[0]);
      }
    } catch(err){
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      <Header getAccount/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail' element={<DetailPage />}>
		 				<Route path=":id" />
		 			</Route>
        <Route path='*' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;