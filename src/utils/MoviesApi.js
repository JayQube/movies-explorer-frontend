class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._host = baseUrl;
    this._headers = headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInfo() {
    return fetch(`${this._host}`, {
      headers: {
        ...this._headers,
      },
    })
      .then(this._checkRequest);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;