import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return(
            <div className='searchbar'>
                <input className='search'
                    type='search'
                    name='search'
                    placeholder='Search'/>
            </div>
        )
    }
}

export default SearchBar;