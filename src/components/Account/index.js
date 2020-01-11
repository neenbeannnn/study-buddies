import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <button onClick={() => console.log({ authUser })}>Show authUser</button>
                <h1>Name: {authUser.username}</h1>
                <h1>Email: {authUser.email}</h1>
                {/* <PasswordForgetForm /> */}
                {/* <PasswordChangeForm /> */}
            </div>
        )}
    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);