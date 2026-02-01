import axios from "axios";

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};
