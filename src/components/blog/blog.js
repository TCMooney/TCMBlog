import React, { Component } from 'react';

import BlogForm from './blogForm';

class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <BlogForm className='blog__form'/>
            </div>
        )
    }
}

export default Blog;