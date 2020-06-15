
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { fetchAllUsers } from '../../../Redux/Actions/User';
import { PortalList } from '../../../Components/Styled/Layout/List';

export class UsersList extends React.PureComponent {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render () {
    return (
      /*TODO:*/
      {/*<PortalList items={this.props.users}>
        { this.props.children }
      </PortalList>*/}
    );
  }
}

UsersList.propTypes = {
  fetchAllUsers: PropTypes.func,
  users: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const mapStateToProps = (reduxState) => {
  const {users: {entities: {user = {}} = {}}} = reduxState;

  let arrUsers = [];

  for (let id in user) {
    const { name: label } = user[id];
    arrUsers.push({label, to: `/users/${id}`, ...user[id]});
  }

  return {
    users: arrUsers
  };
};

export default withRouter(connect(mapStateToProps, { fetchAllUsers })(UsersList));
