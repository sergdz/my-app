import { Component } from 'react'

import './list-item.css'
class ListItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active: false
        }
    }

    onActive = () => {
        this.setState(({ active }) => ({

            active: !active
        }))
    }

    render() {
        const { name, quantity } = this.props;
        const { active } = this.state
        let className = 'shopping__list-item-text'
        if(active){
            className += ' active'
        }
        return (
            <li className="shopping__list-item">
                <div className={className} onClick={this.onActive}>Продукт {name}. Количество: {quantity}</div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                        </label>
                </div>
            </li>

        );
    }
}

export default ListItem;