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
         },
         //!apakah fungsi ini fungsi update ?
         isUpdate: false

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
             this.setState({
                 isUpdate: false,
                 formBlogPost: {
                     id: 1,
                     title: '',
                     body: '',
                     userId: 1
                 },
             })
         }, (err) =>{
             console.log('err :', err);
         })
     }

     //*Menghapus data /Dalete
     handleRemove = (data) => {
        // console.log(data);
        //!mengahapus data
         Axios.delete(`http://localhost:3004/posts/${data}`).then((result)=> {
            this.getPostAPI()
         })
     }
     //*Menggubah data atau Update
     handleUpdate = (data) => {
         //  console.log(data);
         //!mengupdate terlebih dahulu fromBlogPost unutk mengirim data ke form
         this.setState({
             formBlogPost: data,
             isUpdate: true
         })


     }
     //* Put 
     putDataAPI = () => {
         Axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
             //  console.log(res);
             this.getPostAPI();
             //!mengebalikan proses input keawal
             this.setState({
                 isUpdate: false,
                 formBlogPost: {
                     id: 1,
                     title: '',
                     body: '',
                     userId: 1
                 },
             })
         })
     }

     handleFormChange = (event) =>{
        //  console.log('Form Change', event.target);
         let formBlogPostNew = {...this.state.formBlogPost};

         //*membuat id dinamis
         let timestamp = new Date().getTime();
         //!jangan mengupdate id letika dalam posisi dalam update
         if (!this.state.isUpdate) {
             //*ketika nilai isUpdate bernilai false
             formBlogPostNew['id'] = timestamp;
         }
        //  console.log(timestamp);
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
     handleSubmit = () => {
        //  console.log(this.state.formBlogPost);
         //!submit -> true -> update data
         //!submit -> false -> post/insert data

         if (this.state.isUpdate) {
             this.putDataAPI();
             ;
         } else {
            //!memanggil data atau function postDataAPI
            this.postDataAPI();
        }

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
        //!menggil data
        this.getPostAPI();
      
     }
    render() {
        //! fragment -> ketika lenih dari 1 parent
        return (
            <Fragment>
                <h1>Halaman BlogPost</h1>
                <hr />
           <p className="section-title">Blog Post</p>
           <div className="form-add-post">
               <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
               <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    {/* operasi ternari ketika isUpdate bernilai true -> update / False -> save */}
                    {
                        this.state.isUpdate ? <button className="btn-submit" onClick={this.handleSubmit}>Update</button> : <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                    }
           </div>
           {/* Menampilkan hasil json posts ke tampilan atau front-end */}
           {
               this.state.post.map(post => {
                   return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} /> 
                 {/* menggatikan data={post}  title = { post.title } body = { post.body } */}
               })
           }
           {/* Memanggil component post */}
            </Fragment>
        )
    }
}

export default BlogPost;
