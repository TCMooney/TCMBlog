import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignupForm extends Component {
    render() {
        const { className, handlesubmit} = this.props;
        return (
            <form className={`${className} sign-up-form`} handlesubmit={handlesubmit}>
                <Field className='sign-in-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput}/>
                <Field className='sign-in-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}/>
                <Field className='sign-in-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}/>
            </form>
        )
    }

}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);

export default SignupForm;