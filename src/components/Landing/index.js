import React from 'react';
import './index.css';

const Landing = () => (
    <div>
        <h1 className='title'> Study Buddies</h1>
        <Questions />
    </div>
);

const Questions = () => (
    <div>
        <h2> Ever feel alone in your classes?</h2>
        <h2> Are you in need of some new friends?</h2>
        <h2> Join Study Buddies!</h2>
    </div>
)

export default Landing;