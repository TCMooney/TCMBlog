import React, { Component } from 'react';
import Header from './headerNav/header';

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
