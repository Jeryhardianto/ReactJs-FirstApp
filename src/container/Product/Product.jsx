import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';
//StateFull

 class Product extends Component {
    state = {
        order: 4,
        name:'Jery Hardainto'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" srcset="" />
                    </div>
                    <div className="troley">
                        <img src="https://tokoonlinepro.files.wordpress.com/2013/07/cropped-shopping-cart-icon-614x460.png?w=440" alt="" srcset="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                {/* memanggil CardProduct */}
                <CardProduct onConterChange={(value) => this.handleCounterChange(value)}/> 
            </Fragment>
   
        );
    }
}

export default Product;
