import React from 'react';
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import Home from './components/home/Home';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/log" exact component={Log} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
