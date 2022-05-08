class MoviesApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers
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

const moviesApi = new MoviesApi({url: 'https://api.nomoreparties.co/beatfilm-movies', 
  headers: {'Content-Type': 'application/json'}
});

export default moviesApi;
