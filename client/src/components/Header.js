import logo from "../Photo/OpenSea.svg"
import "../style/Header.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";

import { useWeb3React } from '@web3-react/core' // 계정 받아오기

import { Connect } from './Connect'; // 연결되어 있는 것에 대한 정보 받아오기
import { Balance } from './WalletInfo';

export default function Header(){
    const [search, setSearch] = useState("")

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const { account } = useWeb3React(); // web3 Lib을 통해 계정 저장

    const balance = Balance();
    //console.log(balance)
    
    const mypageUrl = `/mypage/${account}`;
    const requestLogin = () => {
        alert("메타마스크 연동 및 로그인이 필요합니다.")
    }



    return(
        <div id="navbar">
            <Link to='/'><img src={logo} alt="logo" id="logo"></img></Link>
            <div id ="barItem">
                <div><input id="search" type="text" placeholder='🔎 Search items, collections, or accounts' value={search} onChange={handleChange}></input>
                {account ? <Link to="/MintNFTPage" id="menu">MintingNFT</Link> : <button id ="menu" onClick={requestLogin}>MintingNFT</button>}
                <Link to="/marketPage" id="menu">Market</Link>
                {account ? <Link to={mypageUrl} id="menu">MyPage</Link> : <button id ="menu" onClick={requestLogin}>MyPage</button>}
                </div>
                </div>
                <Connect />
        </div>
    )
}