import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const colors = [
  "#3d7475","#6eb5aa","#819a78","#277e71","#2cccd3","#72e6cb","#a1cfd0","#daa06d","#f36a6f","#efa514"
];
let i = 0;
setInterval(()=>{
  document.documentElement.style.setProperty('--theme',colors[i]);
  i = (i+1)%10;},4000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
