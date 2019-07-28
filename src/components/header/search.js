import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return(
        <div className='search-bar-grid'>
            <i className="fas fa-search search-bar-grid__icon"></i>
            <input className={`${props.className} form-seach-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder}`}/>
        </div>
    )
}

class SearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} header-search-bar`}>
                <input className='search-bar__form-search-bar' name='query' placeholder='Search' component={this.FormSearchBar}/>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form:'SearchBar'
})(SearchBar);

export default SearchBar;