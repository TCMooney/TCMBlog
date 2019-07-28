import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <input className='form-input__input'
                    type={type}
                    placeholder={placeholder}
                    {...input}/>
            </div>
        )
    }
}

export class FormButton extends Component {
    render(){
        const { className, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className='form-button__button'
                    type={type}
                    {...input}
                    onClick={onClick}>
                    {title}
                </button>
            </div>
        )
    }
}

export class FormTextArea extends Component {
    render(){
        const { className, title, placeholder, type } = this.props;
        return (
            <div className={`${className} form-text-area`}>
                <label className='form-text-area__label'>{title}</label>
                <textarea className='form-text-area__text-area'
                    title={title}
                    placeholder={placeholder}
                    type={type}
                    />
            </div>
        )
    }
}