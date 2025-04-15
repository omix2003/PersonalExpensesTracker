import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api/v1",
  // timeout: 10000,
});

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

export default api;
