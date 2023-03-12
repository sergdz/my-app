import { Component } from "react";

import './shopping-filter.css';

class ShoppingFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''

        };
    }

    static filterState = () => {
        console.log(123);
    }





    render() {

        const buttons = [
            { name: 'all', label: 'Все' },
            { name: 'bay', label: 'Купленные' },
            { name: 'productsOverTen', label: 'Больше 10 шт.' }
        ];

        const button = buttons.map(({ name, label }) => {
            const active = this.props.filter === name
            let clazz = '';

            if(active) {
                clazz = 'btn-outline-primary'
            } else {
                clazz = 'btn-primary'
            }



            return (
                <button
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={(e) => this.props.filterState(e.target,name)}
                    type="submit">
                    {label}
                </button>
            )

        })

        return (

            <div className="shopping__filter-btn">
                {button}
                {/*  <button className="btn btn-primary" type="submit">Все</button>
               <button className="btn btn-primary" type="submit">Купленные</button>
               <button className="btn btn-primary" type="submit">Больше 10 шт.</button> */}
            </div>


        )
    }

};

ShoppingFilter.filterState()

export default ShoppingFilter;
