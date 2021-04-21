export const BASE_URL = "https://mesto.nomoreparties.co/v1/cohort-19";

const authApi = (password, email, sign) => {
  return fetch(`${BASE_URL}/${sign}`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

const authApiToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
      'Authorization': `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export { authApiToken, authApi };
