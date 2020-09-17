//* Basic Component
//! snipet import -> rce
//! Libarary
//! untuk menggunakan CONTEXT API kita harus import createContext
import React, { Component, Fragment, createContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
// import YouTubeComp from '../../component/YutubeComponent/YouTubeComponent'
//!Pages
import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../../container/pages/Hooks/Hooks'
// import LifeCycleCop from '../LifeCycleComp/LifeCycleComp'
//!Style
import './Home.css'

//*import Global Context
import GlobalProvider from '../../context/context';

//* Dipindahkan ke context->context.js
// //* Global 
// export const RootContetx = createContext();
// //*Provider -> menyimpan state global
// const Provider = RootContetx.Provider;



export class Home extends Component {
   //*Dipindahkan ke context->context.jsx
    // state = {
    //     totalOrder: 5
    // }

    // dispatch = (action) => {
    //     if (action.type === 'PLUS_ORDER') {
    //         return this.setState({
    //             totalOrder: this.state.totalOrder + 1
    //         })
    //     }
    //     if (action.type === 'MINUS_ORDER') {
    //         // let totalOrder = 0;
    //         if (this.state.totalOrder > 0) {
    //             return this.setState({
    //                 totalOrder: this.state.totalOrder - 1
    //             })
    //         }
    //     }

    // }


    render() {
        return (
            // dipindahkan ke context->context.jsx
            // <Provider value={
            //     {
            //         state: this.state,
            //         dispatch: this.dispatch
            //     }
            // }>
            // {/* </Provider> */ }
            <Router>
                {/* <div> */}
            {/* <p>YouTube Component</p>
            <hr/>
            <YouTubeComp 
            time="6.77" title="Jery Hardianto" desc="Ditotnton 400rb Kali"/>
            <YouTubeComp
             time="3.54" title="Jery Hardianto" desc="Ditotnton 400rb Kali"/>
            <YouTubeComp
             time="7.87" title="Jery Hardianto" desc="Ditotnton 400rb Kali"/>
            <YouTubeComp /> */}
            {/* <p>Counter</p>
            <hr/> */}
            {/* <Product/> */}
           {/* <p>LifeCycleComponent</p>
           <hr/>
           <LifeCycleComp/> */}
                {/* <p>Blog Post</p>
           <hr/>
           <BlogPost />
            </div> */}
                <Fragment>
                    {/* Routing */}
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycleComp</Link>
                        <Link to="/youtube-component">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    {/* exact -> tidak sama persis */}
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YouTubeCompPage} />
                    <Route path="/hooks" component={Hooks} />
                </Fragment>
            </Router>
        )
    }

}

export default GlobalProvider(Home);
