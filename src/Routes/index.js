
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LayoutApp } from '../Components/Layout';

import NotFound from '../Pages/NotFound';
// TODO:
import UsersList from '../Pages/Users/UsersList';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route { ...rest } render={props => (
      <Layout>
        <Component { ...props } />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.func
};

const Routes = () => {
  return (
    <Switch>
      {/*// TODO:*/}
      <AppRoute exact path="/" layout={ LayoutApp } component={ UsersList } />
      <AppRoute exact path="/users" layout={ LayoutApp } component={ UsersList } />
      <AppRoute exact path="/user-info/:id" layout={ LayoutApp } component={ UsersList } />
      <AppRoute exact path="/new-user" layout={ LayoutApp } component={ UsersList } />
      <AppRoute layout={ LayoutApp } component={ NotFound } />
    </Switch>
  );
};

// TODO:
const mapStateToProps = () => { return {
  };
};

export default connect(mapStateToProps)(Routes);
