//* Basic Component
//! snipet import -> rce
import React, { Component } from 'react'
// import YouTubeComp from '../../component/YutubeComponent/YouTubeComponent'
// import Product from '../Product/Product'
// import LifeCycleCop from '../LifeCycleComp/LifeCycleComp'
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'

export class Home extends Component {
    render() {
        return (
            <div>
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
           <p>Blog Post</p>
           <hr/>
           <BlogPost />
            </div>
        )
    }

}

export default Home;
