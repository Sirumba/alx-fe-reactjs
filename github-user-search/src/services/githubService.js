import axios from "axios";

// Fetch users using GitHub Search API
export const fetchUserData = async (username, location, minRepos) => {
  if (!username) throw new Error("Username is required");

  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  // response.data.items is an array of users
  return response.data.items;
};
