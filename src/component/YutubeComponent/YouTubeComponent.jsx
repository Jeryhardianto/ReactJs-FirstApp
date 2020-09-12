import React from 'react';
import './YoutubeComp.css';

// let title = 'Jery Hardianto';
// let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus consequuntur autem doloribus voluptatum perspiciatis commodi in, optio accusantium perferendis asperiores saepe dolore tenetur nobis, ex inventore! Temporibus, porro officia?';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
         <div className="img-thumb">
                <img src="https://d17ivq9b7rppb3.cloudfront.net/small/avatar/202008152139394cabf249b8bbeedb422049fc5659d287.png" alt="" />
             <p className="time">{props.time}</p>
         </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
//!Default Component Props
YouTubeComp.defaultProps ={
    time: '00.00',
    title: 'Default Judul',
    desc: 'default deskripsi'
}
export default YouTubeComp;