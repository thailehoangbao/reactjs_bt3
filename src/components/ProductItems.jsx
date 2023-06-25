import React, { Component } from 'react'

export default class ProductItems extends Component {


    constructor (props) {
        super(props);
    }

    render() {
        let {product} = this.props;

        return (
            <div>
                <img src={product.image} alt="" className='w-full  border-2 border-gray-400 rounded-tr-md rounded-tl-md' />
                <div className='bg-slate-300 rounded-bl-md rounded-br-md'>
                    <p className='text-start p-2 ml-3 font-bold text-red-500'>{product.name}</p>
                    <p className='text-start pb-2 ml-6'>Price: {product.price}$</p>
                    <button className='mx-4 mb-4 bg-blue-600 text-white shadow-xl p-2 rounded-md btn-1-animation' onClick={()=>{this.props.truyenProduct(product,true)}}>Detail</button>
                </div>
            </div>
        )
    }
}
