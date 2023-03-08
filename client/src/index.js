import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Web3ReactProvider } from '@web3-react/core';
import { getProvider } from './utils/provider';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getProvider}>
      <App /> 
      {/* web3에 저장되어 있는 정보들을 손쉽게 가져올 수 있다.  */}
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);