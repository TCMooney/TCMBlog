import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SigninForm from './signinForm.js'

class Signin extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboard');
        })
    }

    render(){
        return (
            <div className='sign-in'>
                <SigninForm onSubmit={(event) => this.onSubmit(event)} className='sign-in__form'/>
            </div>
        )
    }
}

export default connect(null, actions)(Signin);