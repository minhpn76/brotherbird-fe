import {
  ACCESS_TOKEN_KEY,
  REFRESH_ACCESS_TOKEN_KEY,
} from "./consts";

const Storage = {
  get(key, defaultValue = "") {
    const value = localStorage.getItem(key);

    return value ? value : defaultValue;
  },

  set(key, value = "") {
    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  getAccessToken() {
    return this.get(ACCESS_TOKEN_KEY);
  },

  setAccessToken(token) {
    this.set(ACCESS_TOKEN_KEY, token);
  },

  setRefreshToken(token) {
    this.set(REFRESH_ACCESS_TOKEN_KEY, token);
  },

  getRefreshToken() {
    return this.get(REFRESH_ACCESS_TOKEN_KEY);
  },

  removeToken() {
    this.remove(ACCESS_TOKEN_KEY);
    this.remove(REFRESH_ACCESS_TOKEN_KEY);
  },

  clearAll() {
    localStorage.clear();
  },
};

export default Storage;
