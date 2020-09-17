import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './component/HelloComponent';
// import StateFullComponet from './container/StateFullComponent';
// import YouTubeComp from './component/YutubeComponent/YouTubeComponent';
import Home from './container/Home/Home';
// //*Redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// //* Mengambil File Reducer 
// import rootReducer from './redux/reducer/globalReducer'

// const createStore = redux.createStore;
//* =====================================================
//! KOMPONEN DIBAWAH INI DIPINDAHKAN KE FOLDER REDUCER UNTUK MENGHEMAT TEMPAT KETIKA JUMLAH CODENYA SEMAKIN BANYAK
// //*3 Nilai Awal
// const globalState = {
//   totalOrder: 0
// }
// //*2. Reducer
// const rootReducer = (state = globalState, action) => {
//   //* Menggunakan IF
//   if (action.type === 'PLUS_ORDER') {
//     return {
//       ...state,
//       totalOrder: state.totalOrder + 1
//     }
//   }
//   if (action.type === 'MINUS_ORDER') {
//     let totalOrder = 0;
//     if (state.totalOrder > 0) {
//       totalOrder = state.totalOrder - 1
//     }
//     return {
//       ...state,
//       totalOrder: totalOrder 

//     }
//   }
//   return state;
// }
//* ==========================================================

//*1. Store
// const storeRedux = createStore(rootReducer);

// let nama = 'Jery'
// const HelloWorld = () => {
//   return <p>Selamat datang, {nama}</p>
// }

//* REDUX
// ReactDOM.render(
//   <Provider store={storeRedux}>
//           <Home />
//   </Provider>,
//   document.getElementById('root'));

ReactDOM.render(<Home />, document.getElementById('root'));



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