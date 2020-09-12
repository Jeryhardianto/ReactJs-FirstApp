import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './component/HelloComponent';
// import StateFullComponet from './container/StateFullComponent';
// import YouTubeComp from './component/YutubeComponent/YouTubeComponent';
import Home from './container/Home/Home';

// let nama = 'Jery'
// const HelloWorld = () => {
//   return <p>Selamat datang, {nama}</p>
// }


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <StateFullComponet/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
