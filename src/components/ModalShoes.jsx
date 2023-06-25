import React, { Component } from 'react'

export default class ModalShoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { isModalOpen } = this.state;

        
        return (
            <div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 scale-100 sm:scale-105">
                            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                            <p className="mb-4">Modal content goes here...</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded btn-1-animation" onClick={this.closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
