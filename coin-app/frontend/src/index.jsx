import React from 'react';
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import Home from './components/home/Home';
import Crypto from './components/crypto/Crypto';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Log from './components/log/Log';
import Signup from './components/signup/Signup';
import './index.scss';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Toaster
      position="top-center"
      containerStyle={{
        position: 'relative'
      }}
      toastOptions={{
        duration: 4000,
        className: '',
        style: {
          border: '1.5px solid #ADA996',
          borderRadius: '10px',
          margin: '0.25rem',
          background: '#F2F2F2',
          color: '#B29600'
        }
      }}
    />
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/currencies/:coinId" exact element={<Crypto />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/log" exact element={<Log />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" exact element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
