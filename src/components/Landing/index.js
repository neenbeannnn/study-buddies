import React from 'react';
import './index.css';
import * as ROUTES from '../../constants/routes';
import { withRouter } from 'react-router-dom';

class Landing extends React.Component {

    render() {
        return (
            <div className='landing-container'>
                <div className='questions-container'>
                    <h2 className='question'> Ever feel <span>alone</span> in your classes?</h2>
                    <h2 className='question'> Are you in need of some <span>new friends</span>?</h2>
                    <h2 className='question'> Join Study Buddies!</h2>
                </div>

                <button onClick={() => this.props.history.push(ROUTES.SIGN_IN)}>Let's go!</button>
            </div>);
    }
}

export default withRouter(Landing);