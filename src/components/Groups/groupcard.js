import React from 'react';
import { AddCircle } from 'styled-icons/material';
import { MinusCircle } from 'styled-icons/boxicons-regular/MinusCircle';
import './index.css';

class GroupCard extends React.Component {
    render() {
        return (
            <div className='groups-card-container'>
                <h3>Group {this.props.key}</h3>
                <h4>Members: {this.props.values.length}</h4>
                <AddCircle size='30px' />
                <MinusCircle size='30px' />
            </div>
        );
    }
}

export default GroupCard;