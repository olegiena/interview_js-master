
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Section from '../../../Components/Styled/Layout/Section';
import Content from '../../../Components/Styled/Layout/Content';
import { fetchAllUsers } from '../../../Redux/Actions/User';

class Users extends React.PureComponent {
  
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  
  render () {
    return (
      <>
        <h2>Users</h2>
        <Section>
          <Content>
            <ul>
              {/*{ this.props.users.map(entry => (<li key={entry.first_name}>{entry.first_name}</li>)) }*/}
            </ul>
          </Content>
        </Section>
      </>
    );
  }
}

Users.propTypes = {
  fetchAllUsers: PropTypes.func,
  users: PropTypes.object
};

const mapStateToProps = reduxState => {
  return {
    users: reduxState.users
  };
};

export default withRouter(connect(mapStateToProps, { fetchAllUsers })(Users));
