export default class ApiService {

  _apiBase = 'http://0.0.0.0:3000/api/';
  // _apiBase = 'http://localhost:3000/api/';
  Method = {
    DELETE: 'DELETE',
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
  }

  getResource = async (url, method, body) => {

    let res;
    if (method && body) {
      res = await fetch(`${this._apiBase}${url}`, {method: method, body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}});
    } else {
      res = await fetch(`${this._apiBase}${url}`);
    }

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  };

  createNewUser = async (data) => {
    const res = await this.getResource(`users`, this.Method.POST, data);
    return res;
  };

  getAllUsers = async () => {
    const res = await this.getResource(`users`);
    return res;
  };

  getUserDetails = async (id) => {
    const person = await this.getResource(`users/${id}/`);
    return person;
  };

}
