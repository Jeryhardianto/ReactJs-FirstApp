//* Basic Component
//! snipet import -> rce
import React, { Component, Fragment } from 'react';
// import YouTubeComp from '../../component/YutubeComponent/YouTubeComponent'
import Product from '../Product/Product'
// import LifeCycleCop from '../LifeCycleComp/LifeCycleComp'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost';
import {
    BrowserRouter as Router,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <BrowserRouter>
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
                    </div>
                    {/* exact -> tidak sama persis */}
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                </Fragment>
            </BrowserRouter>
        )
    }

}

export default Home;
