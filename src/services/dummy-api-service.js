export default class DummyApiService {

  _users = [
    {
      first_name: "John",
      last_name: "Smith [TEST DATA]",
      email: "john.smith@test.local",
      peer_ids: [1]
    },
    {
      first_name: "Bilbo",
      last_name: "Baggins [TEST DATA]",
      email: "bilbo.baggins@test.local",
      peer_ids: [1,2]
    },
    {
      first_name: "Frodo",
      last_name: "Baggins [TEST DATA]",
      email: "frodo.baggins@test.local",
      peer_ids: [1,2,3]
    },
  ];

  getAllUsers = async () => {
    return this._users;
  };

  getUserDetails = async () => {
    return this._users[0];
  };
}
