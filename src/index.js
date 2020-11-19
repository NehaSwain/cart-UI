import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd8kyk_O_rt8-UKJNf4CZIbUr3IFk1mbQ",
  authDomain: "cartpage-e3295.firebaseapp.com",
  databaseURL: "https://cartpage-e3295.firebaseio.com",
  projectId: "cartpage-e3295",
  storageBucket: "cartpage-e3295.appspot.com",
  messagingSenderId: "825679386122",
  appId: "1:825679386122:web:8a185270aaa63bcbecb1f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

