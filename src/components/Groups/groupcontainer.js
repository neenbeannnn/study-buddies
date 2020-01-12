import React from 'react';
import GroupCard from './groupcard';
import './index.css';

class GroupContainer extends React.Component {
    render() {
        return (
            <div className='groups-container'>
                {this.props.groups.map((element, i) => <GroupCard key={i} values={element} />)}
            </div>
        );
    }
}

export default GroupContainer;