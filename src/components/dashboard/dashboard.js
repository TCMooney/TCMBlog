import React, { Component } from 'react';

import RecentPosts from './recentPosts';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard__recent'>
                <RecentPosts/>
            </div>
        )
    }
}

export default Dashboard;