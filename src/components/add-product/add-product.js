import { Component } from "react";

import './add-product.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            bay: false,
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.name, this.state.quantity, this.state.bay)

        this.setState({
            name: '',
            quantity: '',
        })
    }
    render() {
        const { name, quantity} = this.state
        return (
            <div className="add-product-form">
                <form onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onValueChange}
                        name='name'
                        value={name}
                        type="text" />

                    <input
                        onChange={this.onValueChange}
                        name='quantity'
                        value={quantity}
                        type="number" />

                    <button type='submit'>Добавить</button>
                </form>

            </div>
        )
    }
};

export default AddProduct;