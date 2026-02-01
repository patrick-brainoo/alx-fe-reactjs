import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined
  }
});

export const searchUsers = (query) => {
  return api.get(`/search/users?q=${query}`);
};
