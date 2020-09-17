import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';
//StateFull
//*CONTEXT API
import { RootContetx, RootContex } from '../../Home/Home'
import { GlobalConsumer } from '../../../context/context';

class Product extends Component {
    //*lokal State
    // state = {
    //     order: 4,
    //     name: 'Jery Hardainto'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <h1>Halaman Product</h1>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" srcset="" />
                    </div>
                    <div className="troley">
                        <img src="https://tokoonlinepro.files.wordpress.com/2013/07/cropped-shopping-cart-icon-614x460.png?w=440" alt="" srcset="" />
                        {/* REDUX */}
                        {/* this.state.order -> digunakan saat state lokal */}
                        {/* this.props.order -> digunakan utk state Global */}
                        {/* <div className="count">{this.props.order}</div> */}
                        {/* CONTEXT API */}
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* memanggil CardProduct */}
                {/* Tanpa State Management */}
                {/* <CardProduct onConterChange={(value) => this.handleCounterChange(value)} /> */}
                {/* Dengan State management */}
                <CardProduct />
            </Fragment>

        );
    }
}
const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}
//* REDUX
// export default connect(mapStateToProps)(Product);
//*CONTEXT API
export default GlobalConsumer(Product);
