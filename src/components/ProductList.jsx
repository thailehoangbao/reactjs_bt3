import React, { Component } from 'react'
import ProductItems from './ProductItems';

export default class ProductList extends Component {


    renderListShoes = () => {
        console.log(this.props.productData);
        let {productData} = this.props;
        return productData.map((product,index) => {
            return (
                <div className='w-full p-16 rounded-xl'>
                    <ProductItems key={product.id} product={product} truyenProduct={this.props.truyenProduct}/>
                </div>
            )
        })
    }


    render() {
        return (
            <div className='grid grid-cols-3 gap-2'>
                {this.renderListShoes()}
            </div>
        )
    }
}
