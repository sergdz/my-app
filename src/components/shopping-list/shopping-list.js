import { Component } from 'react'

import './shopping-list.css';


import ListItem from '../list-item/list-item'
class ShoppingList extends Component {


    render() {

        const { data } = this.props

        const elements = data.map(element => {
            return (
                <ListItem {...element} />
            )
        })
        return (
            <ul className="shopping__list">
                {elements}
            </ul>
        )
    }
}


export default ShoppingList