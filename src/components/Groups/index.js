import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import GroupCard from './groupcard';
import './index.css';
const GroupPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className='groups-container'>
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </div>
        )}
    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(GroupPage);