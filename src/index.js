import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCp3WaQh-v7EXBvCIw8kSavtb2eAJB6fhc",
    authDomain: "lanelitt-dev.firebaseapp.com",
    databaseURL: "https://lanelitt-dev.firebaseio.com",
    projectId: "lanelitt-dev",
    storageBucket: "lanelitt-dev.appspot.com",
    messagingSenderId: "282663918352",
    appId: "1:282663918352:web:941c951769b8e3df44a395"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
