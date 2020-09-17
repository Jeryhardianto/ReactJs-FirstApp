//* GET -> MENGAMBIL
import Axios from 'axios';
import {
    OnlineRoot,
    RootPath
} from './Config'

const Get = (path, root) => {
    //promise =>
    //*  resolve -> Return Hasil yang kita harapkan / positif
    //* reject -> Return Hasil yang kita berikan kepada user ketika ada kesalahan
    const promise = new Promise((resolve, reject) => {
        //!root -> OnlineRoot = true, RootPath = false
        Axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
            .then((result) => {
                //resolve
                resolve(result.data)
                    //  console.log(result.data);
                    //! memasukan result.data atau data ke post utk dipanggil ke front-end
                    // this.setState({
                    //     post: result.data
                    // })
            }, (err) => {
                reject(err);
            })

    })
    return promise;
}
export default Get;