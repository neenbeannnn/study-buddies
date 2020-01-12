import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import './index.css';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);
const NavigationAuth = () => (
    <div className='navigation-container'>
        <h1 className='title'>
            Study Buddies
        </h1>
        <SignOutButton className='navbar-signout' />
    </div>
);
const NavigationNonAuth = () => (
    <div classNAme='navigation-container'>
        <h1 className='title'>
            Study Buddies
        </h1>
        <div>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </div>
    </div>
);
export default Navigation;