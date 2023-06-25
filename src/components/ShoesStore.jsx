import React, { Component } from 'react'
import ProductList from './ProductList'
import data from '../data/data.json'
import ModalShoes from './ModalShoes';
import 'animate.css';

export default class ShoesStore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataShoes: data,
            isModalOpen: false,
            product: {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
            }
        };
    }


    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    handleButton = (product, clickModal) => {
        console.log(product);
        this.setState({
            isModalOpen: clickModal,
            product: product
        });
    }



    render() {
        const { isModalOpen, product } = this.state;
        return (
            <div>
                <h1 className='text-center text-red-500 font-bold text-3xl'>Welcome Shoes Store</h1>
                <ProductList productData={this.state.dataShoes} truyenProduct={this.handleButton} />
                {/* <ModalShoes xulyButton={this.handleButton}/> */}
                <div>
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 rounded-lg animate__animated animate__backInDown">
                            <div className="bg-white shadow-lg rounded-b-lg" style={{ width: '300px', height: '300px' }}>
                                <div className='w-full pl-10'>
                                <img src={product.image} alt="" width={200} height={200} className='rounded-lg' />
                                </div>
                                <div className='bg-slate-300 w-full px-4 rounded-b-lg'>
                                    <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                                    <p className="mb-1 text-sm font-thin text-red-500">
                                        Price: {product.price}$ - Quality: {product.quantity}
                                    </p>
                                    <p className='mb-3'>{product.description.length > 20 ? product.description.substring(0, 40) + "..." : product.description}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded mb-3" onClick={this.closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
