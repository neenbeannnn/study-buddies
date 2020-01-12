import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import GroupContainer from './groupcontainer';
const GroupPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <Groups />
        )}
    </AuthUserContext.Consumer>
);

class GroupsBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            groups: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        console.log('Here');
        this.props.firebase.groups().on('value', snapshot => {

            this.setState({ loading: false });
        });
    }

    componentWillUnmount() {
        this.props.firebase.groups().off();
    }

    render() {
        const { groups, loading } = this.state;

        return (
            <div>
                {loading && <div>Loading...</div>}
                <GroupContainer groups={groups} />
            </div>
        );
    }
}

const Groups = withFirebase(GroupsBase);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(GroupPage);