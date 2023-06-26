import React, { Component } from 'react';
import _, { filter } from 'lodash';
import data from './data/data.json';
import PopupModal from './PopupModal';

export default class BaiTapTongHop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            myList: data,
            openModal: false,
            product: {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
                "type" : "Giày Xịn"
            }
        };
    }


    handlType = (type) => {
        const newArr = [...this.state.data];
        const updateArr = newArr.filter(item => item.type === type);
        this.setState({
            myList: [...updateArr]
        })
    }

    hanldModal = (open,item) => {
        this.setState({
            openModal: open,
            product: item
        })
    }

    closeModal = (close) => {
        this.setState({openModal: close},() => {
            console.log('this.state.closeModal ',this.state.openModal)
        })
    }


    renderui = () => {

        const mangType = _.uniqBy(data, 'type');

        return (
            <div className='grid grid-cols-4'>
                <div className="col-span-1 h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center p-2 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                    </svg>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            {mangType.map((sp, index) => {
                                return (
                                    <li className="dark:bg-gray-800 dark:text-gray-50" key={index}>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                            </svg>
                                            <span onClick={() => { this.handlType(sp.type) }}>{sp.type}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                        <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                                    </svg>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-center text-purple-600 text-4xl'>MENU SHOES</h3>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-3 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {this.state.myList.map((item, index) => {
                                    return (
                                        <div className="p-4 lg:w-1/3" key={index}>
                                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.name}</h2>
                                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.price}$</h1>
                                                <p className="leading-relaxed mb-3">
                                                    <img src={item.image} width={200} height={200} alt="" />
                                                </p>
                                                <a className="hover:text-emerald-500 text-indigo-500 inline-flex items-center" onClick={()=>{this.hanldModal(true,item)}} style={{cursor:'pointer'}}>Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                            <circle cx={12} cy={12} r={3} />
                                                        </svg>1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                        </svg>6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div>
                <PopupModal openModal={this.state.openModal} closeModal={this.closeModal} product={this.state.product}/>
                {this.renderui()}
            </div>
        )
    }
}
