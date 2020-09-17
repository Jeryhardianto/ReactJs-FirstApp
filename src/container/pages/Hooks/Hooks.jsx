import React, { Component, useState } from 'react';
import './Hooks.css';
// class Hooks extends Component {
//     state = {
//         count: 0
//     }
//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <h1>Halamana Hooks</h1>
//                 <hr />
//                 <p >Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

//* StateLes Componet
//* HOOKS IMPLEMENTASI
const Hooks = () => {
    const [count, SetCount] = useState(0);

    return (
        <div className="p-hooks">
            <h1>Halamana Hooks</h1>
            <hr />
            <p >Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => SetCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;