import { Component } from 'react'

import './header.css'
class Header extends Component {
    render() {
        const {countProducts, bayProducts} = this.props
        return (
            <div className="header">
                <p className='header__text'>Количество продуктов:</p>
                <span className='header__product-count'>{countProducts}</span>
                <p className='header__text'>Куплено продуктов:</p>
                <span className='header__product-count'>{bayProducts}</span>
            </div>

        )
    } Ц
}

export default Header