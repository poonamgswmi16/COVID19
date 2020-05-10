import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPageComponent from './Components/MainPage.component';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render((
    <BrowserRouter>
      <MainPageComponent />
    </BrowserRouter>
  ), document.getElementById('root'))