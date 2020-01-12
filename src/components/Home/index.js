import React, { Fragment } from 'react';
import { withAuthorization } from '../Session';
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <h1>Home</h1>
                </div>
                <div className='home-body'>
                    <div className='home-section'>
                        Class 1
                </div>
                    <div className='home-section'>
                        Class 2
                </div>
                    <div className='home-section'>
                        Class 3
                </div>
                </div>
            </Fragment>
        );
    }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);