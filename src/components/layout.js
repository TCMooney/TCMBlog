import React, { Component } from 'react';
import Header from './header/header';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
      </div>
    );
  }
}
