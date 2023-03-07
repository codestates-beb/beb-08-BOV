import React from 'react';
import "../style/Footer.css";
import {Link} from "react-router-dom";
import logo from "../Photo/github.png"

export default function Footer() {
    return (
        <div className='Footer'>
            <div id = "Bottom">
                <div className='section' id= "part1">
                    <h3>OpenSea Made by BOV</h3>
                    <p id = "description">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                </div>
                <div className='section' id= "part2">
                    <h4>⚒️Creators</h4>
                    <p>이의준</p>
                    <p>김상우</p>
                    <p>박규태</p>
                    <p>이태훈</p>
                </div>
                <div className='section'>
                    <Link to='https://github.com/codestates-beb/beb-08-BOV'><img src={logo} alt="logo" id="part3"></img></Link>
                </div>
            </div> 
        </div>
    )
}