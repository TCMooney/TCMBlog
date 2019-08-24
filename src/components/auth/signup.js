import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';

class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('navigate to the dashboard');
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm className='sign-up__form'  onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default  connect(null, actions)(Signup);