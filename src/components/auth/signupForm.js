import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignupForm extends Component {
    render() {
        const { className, handlesubmit} = this.props;
        return (
            <form className={`${className} sign-up-form`} handlesubmit={handlesubmit}>
                <Field className='sign-up-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput}/>
                <Field className='sign-up-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}/>
                <Field className='sign-up-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}/>
                <Field className='sign-up-form__confirm'
                    name='confirm'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    component={FormInput}/>
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__create'
                    name='create'
                    type='submit'
                    title='Create Account'
                    component={FormButton}/>
                <Field className='sign-up-form__back'
                    name='back'
                    type='button'
                    title='Back'
                    component={FormButton}/>
            </form>
        )
    }

}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);

export default SignupForm;