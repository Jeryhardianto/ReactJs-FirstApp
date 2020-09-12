import React, { Component } from 'react';
// import './Product.css';;

//StateFull

export class CardProduct extends Component {
    state = {
        order: 4,
        name: 'Jery Hardainto'
    }

    // ketika couter berubah
    handleCouterChange= (newValue) =>{
        this.props.onConterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCouterChange(this.state.order);
        })
    }
    handleMinus = () => {
        //!mencegah nilai ordernya =! -1
        if (this.state.order > 0) {
            this.setState({ //Set.State -> untuk mengupdate sebuah komponen
                order: this.state.order - 1
            }, () => {
                this.handleCouterChange(this.state.order);
            })
        }
    }
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/24/4820229/4820229_b9e4a51e-af8d-4ab8-b748-522fae9e80a6_1080_1080" alt="" />
                    </div>
                    <p className="product-title">Macbook Pro 2020 Touch Bar Core I5 10th Gen/16GB/512GB</p>
                    <p className="product-price">Rp. 23.000.000</p>
                    <div className="couter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" className="text-input-count" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>

        );
    }
}

export default CardProduct;

