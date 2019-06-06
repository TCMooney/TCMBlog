import React, { Component } from 'react';

import SigninForm from './signinForm.js'

class Signin extends Component {
    render(){
        return (
            <div className='sign-in'>
                <SigninForm onSubmit={/*onSubmit function*/} className='sign-in__form'/>
            </div>
        )
    }
}