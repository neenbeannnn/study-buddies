import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './index.css';

class SignUpPage extends Component {
    render() {
        return (
            <div className='SignUp'>
                <h1>Register With Us!</h1>
                <SignUpForm />
            </div>
        );
    }
};

const INITIAL_STATE = {
    // username: '',
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    major: '',
    passwordOne: '',
    passwordTwo: '',
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        email,
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(() => {
                console.log("There is an error!");
                this.props.history.push(ROUTES.HOME);
            });
        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            firstName,
            lastName,
            email,
            major,
            passwordOne,
            passwordTwo,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            firstName === '' ||
            lastName === '' ||
            major === '';

        return (
            <div className='boxed'>
                <form onSubmit={this.onSubmit}>
                    <br />
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <br />
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <br />
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <br />
                    <input
                        name="major"
                        value={major}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Major"
                    />
                    <br />
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <br />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <br />
                    <button className='button' disabled={isInvalid} type="submit">
                        Sign Up</button>
                </form>
            </div>
        );
    }
}
const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };