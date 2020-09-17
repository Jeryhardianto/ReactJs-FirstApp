import React, { Component } from 'react';
import Couter from './Couter';

// import './Product.css';;

//StateFull

export class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/24/4820229/4820229_b9e4a51e-af8d-4ab8-b748-522fae9e80a6_1080_1080" alt="" />
                </div>
                <p className="product-title">Macbook Pro 2020 Touch Bar Core I5 10th Gen/16GB/512GB</p>
                <p className="product-price">Rp. 23.000.000</p>
                {/* Tanpa State Management */}
                {/* <Couter onConterChange={(value) => this.props.onConterChange(value)} /> */}
                {/*  Dengan State Management*/}
                <Couter />
            </div>

        );
    }
}

export default CardProduct;

