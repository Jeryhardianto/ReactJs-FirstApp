import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

//*POST -> CREATE -> MENAMBAH
const postNewsBolg = (data) => Post('posts', false, data);

//* PUT -> UPDATE
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//* DELETE -> HAPUS
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

//* GET -> MENGAMBIL
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true)

const API = {
    postNewsBolg,
    updateNewsBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments
}

export default API;

