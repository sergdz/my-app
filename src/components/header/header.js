import { Component } from 'react'

import './header.css'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className='header__text'>Количество продуктов:</p>
                <span className='header__product-count'>0</span>
                <p className='header__text'>Куплено продуктов:</p>
                <span className='header__product-count'>0</span>
            </div>

        )
    } Ц
}

export default Header