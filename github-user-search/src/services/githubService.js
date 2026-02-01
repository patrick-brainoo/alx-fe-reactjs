import axios from "axios";

export const fetchUserData = ({
  username,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) => {
  let query = "";
  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`;
  return axios.get(url);
};
