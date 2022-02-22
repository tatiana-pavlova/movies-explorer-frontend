class MainApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  


  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new MainApi({url: '', 
  headers: {'Content-Type': 'application/json'}
});

export default mainApi;
