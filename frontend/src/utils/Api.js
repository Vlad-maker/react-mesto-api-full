class Api {
  constructor(data) {
    this._url = data.url;
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
    }).then(this._checkStatus);
  }

  receiveCardsFromServer() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
    }).then(this._checkStatus);
  }

  uploadCardsToServer(names, links) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: names,
        link: links,
      }),
    }).then(this._checkStatus);
  }
 
  editUserInfo(names, links) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: names,
        about: links,
      }),
    }).then(this._checkStatus);
  }
  
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
    }).then(this._checkStatus);
  }
  
  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        avatar: data,
      }),
    }).then(this._checkStatus);
  }
  
  setLike(id, checkCard) {
    if (checkCard) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "content-type": "application/json",
        },
      }).then(this._checkStatus);
    } else {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "content-type": "application/json",
        },
      }).then(this._checkStatus);
    }
  }
  
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
const api = new Api({
  url: "https://top.mestop.nomoredomains.club",
});

export default api;
