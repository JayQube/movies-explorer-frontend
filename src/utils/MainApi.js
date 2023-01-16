class MainApi {
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

  addMovie(movie, jwt) {
    return fetch(`${this._host}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then(this._checkRequest);
  }

  deleteMovie(id, jwt) {
    return fetch(`${this._host}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${jwt}`
      },
    })
      .then(this._checkRequest);
  }

  getMovies(jwt) {
    return fetch(`${this._host}/movies`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${jwt}`
      },
    })
      .then(this._checkRequest);
  }

  updateUserInfo(inputValues, jwt) {
    console.log(inputValues)
    return fetch(`${this._host}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email
      }),
    })
      .then(this._checkRequest);
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default mainApi;