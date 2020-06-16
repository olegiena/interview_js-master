import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import ApiService from '../../services/api-service';
import DummyApiService from '../../services/dummy-api-service';

import { PeoplePage } from '../pages';

import { ApiServiceProvider } from '../api-service-context';

import './app.css';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NewUser from '../users/new-user';

export default class App extends Component {

  state = {
    apiService: new ApiService(),
  };

  onServiceChange = () => {
    this.setState(({ apiService }) => {
      const Service = apiService instanceof ApiService ? DummyApiService : ApiService;
      // const Service = DummyApiService;
      return {
        apiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <ApiServiceProvider value={this.state.apiService} >
          <Router>
            <div className="userdb-app">
              <Header />

              <Switch>
                <Route path="/"
                       render={() => <h2>Welcome to UserDB</h2>}
                       exact />
                <Route path="/users/:id?" component={PeoplePage} />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
              <NewUser onServiceChange={this.onServiceChange} />

            </div>
          </Router>
        </ApiServiceProvider>
      </ErrorBoundry>
    );
  }
}
