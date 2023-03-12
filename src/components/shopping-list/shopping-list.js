import { Component } from 'react'

import './shopping-list.css';


import ListItem from '../list-item/list-item'
class ShoppingList extends Component {


    render() {

        const { data, onDelete, onActive } = this.props
        if (!data) {
            return null; // или другой компонент заглушку
          }

        let elements = data.map(item => {
         /*    localStorage.setItem('shopping-list', JSON.stringify(item))
            const list = localStorage.getItem('shopping-list')
            console.log(JSON.parse(list));

            if (localStorage.getItem('shopping-list')) {
                item = JSON.parse(list)
                console.log(item);
            } */

            const { id, ...element } = item

            return <ListItem
                onActive={(e) => onActive(id, e.currentTarget.getAttribute('data-toggle'))}
                key={id}
                id={id}
                {...element}
                onDelete={() => onDelete(id)}


            />

        })



        if (data.length < 1) {
            return elements = <div className="shopping__list-item-text">Вы ничего не купили</div>
        }


        return (
            <ul className="shopping__list">
                {elements}
            </ul>
        )
    }
}


export default ShoppingList