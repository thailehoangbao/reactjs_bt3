import React, { Component } from 'react';
import _ from 'lodash';
import './Popup.css';

export default class PopupModal extends Component {

    constructor(props) {
        super(props);
    };


    render() {
        let { openModal ,product } = this.props;
        console.log("999",openModal)

        const classModal = ["relative", "z-10", openModal ? 'openModal' : 'closeModal']

        console.log(_.join(classModal, ' '))
        return (
            <div className={_.join(classModal, ' ')} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-purple-500 font-semibold leading-6 text-3xl" id="modal-title">{product.name}</h3>
                                        <div className="mt-2">
                                            <div className='w-2/3 pl-24'>
                                                <img src={product.image}  />
                                            </div>
                                            <p className='text-center text-red-600 font-thin text-2xl'>{product.price}$</p>
                                            <p className="text-sm text-gray-500">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Click Add</button>
                                <button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>{this.props.closeModal(false)}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}