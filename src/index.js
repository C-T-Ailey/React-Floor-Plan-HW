import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import FloorPlan from './FloorPlan';
// import reportWebVitals from './reportWebVitals';

const specs = {

  bedNum: [1,2,3],

  size: [
    "Half",
    "Full"
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FloorPlan specs={specs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
