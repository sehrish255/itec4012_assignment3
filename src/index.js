import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SportsOrderContextProvider } from './context/sportsOrderContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVus8PewFbqa60PsGZvhGWqApGIhfEo_w",
  authDomain: "sports-itec.firebaseapp.com",
  projectId: "sports-itec",
  storageBucket: "sports-itec.appspot.com",
  messagingSenderId: "1020263101875",
  appId: "1:1020263101875:web:98b1c2cbc5172fdb1487c6",
  measurementId: "G-WHHX63WE7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <SportsOrderContextProvider>
    <App />
  </SportsOrderContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();