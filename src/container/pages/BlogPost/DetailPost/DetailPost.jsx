import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import './DetailPost.css'

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    // console.log(this.props);
    //LifeCycle
    componentDidMount() {
        //postID bebas
        // console.log(this.props.match.params.postID);
        let id = this.props.match.params.postID;
        Axios(`http://localhost:3004/posts/${id}`).then(res => {
            console.log('Result', res);
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render() {
        return (
            <Fragment>
                <h1>Halaman Detail Post</h1>
                <hr />
                <div className="detail-post">

                    <div className="thumb">
                        <img src="http://placeimg.com/200/150/any" alt="" srcset="" />
                    </div>
                    <div className="content">
                        <p className="detail-title">{this.state.post.title}</p>
                        <p className="detail-body">{this.state.post.body}</p>
                        <button className="btn-back" >Kembali</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DetailPost;
