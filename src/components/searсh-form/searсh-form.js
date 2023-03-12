import { Component } from "react";


import './searсh-form.css';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:''

        }
    }

    onInputChange = (e) => {
        const searchValue = e.target.value
        this.setState({searchValue})
        this.props.onInputChange(searchValue)
    }



    render () {
        return (
            <input
            className="search-form__input"
            onChange={this.onInputChange}
            placeholder="Введите название продукта"
            />
        );
    }
}

export default SearchForm