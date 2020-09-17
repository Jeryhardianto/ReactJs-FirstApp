import React, { Component } from 'react';
import { GlobalConsumer } from '../../../../context/context';
//*REDUX
// import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';

import { RootContetx, RootContext } from '../../../Home/Home'

class Couter extends Component {
    //! State ini tidak digunakan apabila menggunakan stateGlobal
    // state = {
    //     order: 4,
    //     name: 'Jery Hardainto'
    // }

    // ketika couter berubah
    // handleCouterChange = (newValue) => {
    //     this.props.onConterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCouterChange(this.state.order);
    //     })
    // }
    // handleMinus = () => {
    //     //!mencegah nilai ordernya =! -1
    //     if (this.state.order > 0) {
    //         this.setState({ //Set.State -> untuk mengupdate sebuah komponen
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCouterChange(this.state.order);
    //         })
    //     }
    // }
    render() {
        console.log(this);
        return (

            <div className="couter">
                {/* {this.handleMinus} -> fungsi lokal */}
                {/* {this.props.handleMinus} -> fungsi GLOBAL */}
                {/* REDUX */}
                {/* <button className="minus" onClick={this.props.handleMinus}>-</button> */}
                {/* CONTEXT API */}
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                {/* this.state.order -> digunakan saat state lokal */}
                {/* this.props.order -> digunakan utk state Global */}

                <input type="text" className="text-input-count" value={this.props.state.totalOrder} />

                {/* {this.handlePlus} -> fungsi lokal */}
                {/* {this.props.handlePlus} -> fungsi GLOBAL */}
                {/* REDUX */}
                {/* <button className="plus" onClick={this.props.handlePlus}>+</button> */}
                {/* CONTEXT API */}
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>



        )
    }
}
//! Lanjut dari index.js utk state management
// //*4 State
// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }
// //*5 Dispacth
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_OREDER }),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_OREDER })
//     }
// }
//*REDUX
// export default connect(mapStateToProps, mapDispatchToProps)(Couter);
//*COTEXT API
export default GlobalConsumer(Couter);
