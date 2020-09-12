//*rce -> snipet
//* Memanggil API
import React, { Component, Fragment } from 'react'
import '../BlogPost/BlogPost.css'
import Post from '../../component/Post/Post'
import Axios from 'axios'
// *memanggil API dengan AXIOS


 class BlogPost extends Component {
     state = {
         post:[],
         formBlogPost:{
             id:1,
             title:'',
             body:'',
             userId:1
         }
     }

    //!memanggil API dengan AXIOS / GET
    //! mengurut kan data berdasarkan post terbaru => http://localhost:3004/posts?_sort=id&_order=desc
     getPostAPI = () =>{
         Axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result) => {
             //  console.log(result.data);
             //! memasukan result.data atau data ke post utk dipanggil ke front-end
             this.setState({
                 post: result.data
             })
         })
     }

     //* memasukan data ke db.json / insert data
     postDataAPI = () =>{
         Axios.post("http://localhost:3004/posts", this.state.formBlogPost).then((res) =>{
             console.log(res);
             //!menggantikan data baru atau menampilkan yg terbaru
             this.getPostAPI();
         }, (err) =>{
             console.log('err :', err);
         })
     }

     //!Menghapus data
     handleRemove = (data) => {
        // console.log(data);
        //!mengahapus data
         Axios.delete(`http://localhost:3004/posts/${data}`).then((result)=> {
            this.getPostAPI()
         })
     }

     handleFormChange = (event) =>{
        //  console.log('Form Change', event.target);
         let formBlogPostNew = {...this.state.formBlogPost};

         //*membuat id dinamis
         let timestamp = new Date().getTime();
        //  console.log(timestamp);
        formBlogPostNew['id'] = timestamp;
        //  console.log(event.target.name);
        //  console.log('init state: ', this.state.formBlogPost);
        //  console.log('new value: ', formBlogPostNew);
        
        formBlogPostNew[event.target.name] = event.target.value;
        //  let title =event.target.value
         this.setState({
             formBlogPost: formBlogPostNew
            })
     }

     //!membuat event ketika tombol submit diklik
     handleSubmit =()=>{
        //  console.log(this.state.formBlogPost);
        //!memanggil data atau function postDataAPI
        this.postDataAPI();
     }
     componentDidMount(){
        //!memanggil API dengan fetch
        //  fetch('https://jsonplaceholder.typicode.com/posts')
        //      .then(response => response.json())
        //      .then(json => {
        //         //! memasukan json/data ke post utk dipanggil ke front-end
        //          this.setState({
        //              post: json
        //          })
        //      })
        //!menggail data
        this.getPostAPI();
      
     }
    render() {
        //! fragment -> ketika lenih dari 1 parent
        return (
            <Fragment>
           <p className="section-title">Blog Post</p>
           <div className="form-add-post">
               <label htmlFor="title">Title</label>
               <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
               <label htmlFor="body">Blog Content</label>
               <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
               <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
           </div>
           {/* Menampilkan hasil json posts ke tampilan atau front-end */}
           {
               this.state.post.map(post => {
                   return <Post key={post.id} data={post} remove={this.handleRemove}/> 
                 {/* menggatikan data={post}  title = { post.title } body = { post.body } */}
               })
           }
           {/* Memanggil component post */}
            </Fragment>
        )
    }
}

export default BlogPost;
