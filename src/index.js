import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from "./mazyteUzduotele/App";
// import NumbersBox from "./numbersBox/NumbersBox";
// import BuyProduct from "./BuyProduct";
import CookiesGame from "./cookiesGame/CookiesGame";

ReactDOM.render(
    <React.StrictMode>
        <CookiesGame/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();