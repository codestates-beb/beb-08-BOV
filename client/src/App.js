import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

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
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;