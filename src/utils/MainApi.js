class MainApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  register(values) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({email: values.email, password: values.password, name: values.username})
    })
      .then((res) => this._checkResponse(res))
  }

  authorize = (values) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({password: values.password, email: values.email})
    })
      .then((res) => this._checkResponse(res))
  }

  unauthorize = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._checkResponse(res))
  }

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include'
    })
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  editProfileInfo = (data) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then ((res) => {
      return this._checkResponse(res);
    })
  }
  

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie)
    })
    .then ((res) => {
      return this._checkResponse(res);
    })
  }


  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then ((res) => {
      return this._checkResponse(res);
    })
  }
  

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new MainApi({url: 'http://localhost:4000', 
  headers: {'Content-Type': 'application/json'}
});

export default mainApi;
