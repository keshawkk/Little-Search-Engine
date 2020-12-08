import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './styles/app.scss';

const App = () => (

  <BrowserRouter>

    <Routes />

  </BrowserRouter>

);

export default App;
