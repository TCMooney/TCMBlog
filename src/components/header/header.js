import React, { Component } from 'react';
import SearchBar from './search-bar.js';

class Header extends Component {
    render(){
        return (
            <div className='header'>
                <img className='header__img' src='http://via.placeholder.com/100x100'/>
                <SearchBar className='header__search-bar'/>
                <div className='header__links'>
                    <div className='header__link-a'>Link A</div>
                    <div className='header__link-b'>Link B</div>
                </div>
            </div>
        )
    }
}

export default Header;