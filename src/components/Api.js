import { Promise } from "core-js";

export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  fetchProfile() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  editProfile(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }
  addCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
    });
  }
  addLike(data) {
    return fetch(`${this.baseUrl}/cards/likes/${data}`, {
      method: "PUT",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
    });
  }
  // other methods for working with the API
}
