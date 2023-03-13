import React, { useEffect } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core'
// import erc721Abi from "../erc721Abi"
// import NFTViewer from './NFTViewr';
import NFTViewer from './NFTViewr';
import './MyPage.css';
import {useState} from 'react'

function MyPage() {
    const { account } = useWeb3React();


    const [text,setText] = useState('NoName');
    const [inputText, setInputText] = useState(''); // 모달 팝업에서 입력받은 값 저장할 상태 변수
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 팝업 열림 여부 상태 변수
    const [wallet,setWallet] = useState('0x93992FD5D9527532fdEcD55b169Bd4d11Fc92726');

        // 모달 팝업에서 입력값을 받는 함수
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // 모달 팝업에서 확인 버튼을 누르면 호출되는 함수
    const handleConfirm = () => {
        setText(inputText); // 입력값으로 텍스트 값 변경
        setIsModalOpen(false); // 모달 팝업 닫기
    };



    return (
        <div className="mypage_box">
            <img className="mypage_img" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
            <div className="box">
                <img className="profile_img" src="https://cdn.discordapp.com/attachments/1049213960387301378/1083071229755404318/universe-g2cf6028e7_1280.jpg"></img>
            </div>
            <div className="text_modify">
                <div>
                    <p className = "text_btt">{text}</p>
                </div>
                <div> 
                    <button onClick={() => setIsModalOpen(true)}>
                        <div className="img_div">
                            <img className="img_btt" src="https://cdn.pixabay.com/photo/2016/03/31/23/37/draw-1297723_640.png"/>
                        </div>
                    </button>
                    {isModalOpen && ( // 모달 팝업 열림 여부에 따라 모달 팝업 표시
                        <div className="modal">
                        <input type="text" value={inputText} onChange={handleInputChange} />
                        <button onClick={handleConfirm}>확인</button>
                        </div>
                    )}
                </div>
            </div>
            <p className="wallet_address">{wallet}</p>
            <div className="nft_">
                <p className="nft_dir">NFT</p>
            </div>
            <div className="nft_list">
                <NFTViewer />
            </div>
        </div>
    );
}

export default MyPage;