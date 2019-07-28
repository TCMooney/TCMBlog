import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { FormButton, FormInput, FormTextArea } from '../formFields';

class BlogForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form className={`${className} blog-form`} handleSubmit={handleSubmit}>
                <Field className='blog-form__title'
                    placeholder='Blog Title'
                    type='title'
                    name='title'
                    title='Blog Title'
                    component={FormInput}/>
                <Field className='blog-form__content'
                    name='content'
                    placeholder='Write your blog post here'
                    type='content'
                    title='Blog Content'
                    component={FormTextArea}/>
                <Field className='blog-form__tags'
                    name='tags'
                    title='Tags'
                    placeholder='Tags'
                    component={FormInput}/>
                <div className='blog-form__line'></div>
                <Field className='blog-form__back'
                    name='back'
                    title='Back'
                    type='button'
                    component={FormButton}/>
                <Field className='blog-form__submit'
                    name='submit'
                    title='Submit'
                    type='submit'
                    component={FormButton}/>
            </form>
        )
    }
}

BlogForm = reduxForm({
    form: 'BlogForm'
})(BlogForm);

export default BlogForm;