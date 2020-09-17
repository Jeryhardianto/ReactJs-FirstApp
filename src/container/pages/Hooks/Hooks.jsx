import React, { Component, useState, useEffect, Fragment } from 'react';
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
//     //!LifeCycle Hooks
//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }
//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = 'React App'
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
//* Side Effect/LifeCycle
const Hooks = () => {
    const [count, SetCount] = useState(0);

    useEffect(() => {
        //! componentDidMount() & componentDidUpdate()
        document.title = `Title Change: ${count}`
        return () => {
            //!componentWillUnmount()
            document.title = 'React App'
        }
    })

    return (
        <Fragment>
            <h1>Halamana Hooks</h1>
            <hr />
            <div className="p-hooks">
            <p >Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => SetCount(count + 1)}>Update Nilai</button>
        </div>
        </Fragment>
    )
}

export default Hooks;