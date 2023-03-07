import logo from "../Photo/OpenSea.svg"
import "../style/Header.css";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Web3 from 'web3';

export default function Header(){
    const [search, setSearch] = useState("")

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const[web3, setweb3] = useState();

    useEffect(() => {
        if(typeof window.ethereum !== "undefined"){
            try{
                const web = new Web3(window.ethereum);
                setweb3(web)
            } catch(err){
                console.log(err)
            }
        }
    }, [])

    const [account, setAccount] = useState("");
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async() => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        }) 
        if(isConnected)setAccount("")
        else {
            //console.log(accounts);
            setAccount(accounts[0]);
            setIsConnected(true);
        }
    }

    const mypageUrl = `/mypage/${account}`;
    const requestLogin = () => {
        alert("메타마스크 연동 및 로그인이 필요합니다.")
    }

    return(
        <div id="navbar">
            <Link to='/'><img src={logo} alt="logo" id="logo"></img></Link>
            <div id ="barItem">
                <div><input id="search" type="text" placeholder='🔎 Search items, collections, or accounts' value={search} onChange={handleChange}></input>
                {isConnected ? <Link to="/MintNFTPage" id="menu">MintingNFT</Link> : <button id ="menu" onClick={requestLogin}>MintingNFT</button>}
                <Link to="/marketPage" id="menu">Market</Link>
                {isConnected ? <Link to={mypageUrl} id="menu">MyPage</Link> : <button id ="menu" onClick={requestLogin}>MyPage</button>}
                </div>
                </div>
                    <button id="wallet" onClick={connectWallet}> {isConnected ? <button id="confirm">confirm</button> : <button id="wallet">Connect Metamask</button>}</button>
        </div>
    )
}