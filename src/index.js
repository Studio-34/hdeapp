import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import Faq from './Comps/Faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Comps/Navbar'
import Home from './Comps/Home'
import Footer from './Comps/Footer';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="App mx-auto">
        <div className='sticky-top'>
          <Navbar />
        </div>
          <Home />
        <App />
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
