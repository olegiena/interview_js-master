import React, { Component } from 'react';
import ApiService from '../../../services/api-service';

export default class NewUser extends Component {

  apiService = new ApiService();

  state = {
    first_name: '',
    last_name: '',
    email: '',
    peer_ids: []
  };

  onInputChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.apiService
      .createNewUser(this.state)
      .then((res) => {
        // console.log('RES = ', res);
      })
      .catch((err) => {
        // console.log('ERR = ', err);
      });
  };

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <form
          className="bottom-panel d-flex"
          onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <input type="text" name="first_name" value={this.state.first_name}
                     className="form-control new-todo-label"
                     placeholder="First Name" onChange={this.onInputChange} />
            </div>
            <div className="col">
              <input type="text" name="last_name" value={this.state.last_name}
                     className="form-control new-todo-label"
                     placeholder="Last Name" onChange={this.onInputChange} />
            </div>
            <div className="col">
              <input type="text" name="email" value={this.state.email}
                     className="form-control new-todo-label"
                     placeholder="Email" onChange={this.onInputChange} />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-outline-secondary">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
