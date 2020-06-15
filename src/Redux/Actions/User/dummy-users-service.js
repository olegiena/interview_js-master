export default class DummyUsersService {

  _users = [
    {
      'user': {
        'first_name': 'Jonathan',
        'last_name': 'Mason',
        'email': 'jonathan.mason@test.local',
        'peer_ids': [1]
      }
    },

    {
      'user': {
        'first_name': 'John',
        'last_name': 'Smith',
        'email': 'john.smith@test.local',
        'peer_ids': [1, 2, 3]
      }
    }
  ];

  getAllUsers = async () => {
    return this._users;
  };

  getUserDetails = async () => {
    return this._users.data[0];
  };
}
