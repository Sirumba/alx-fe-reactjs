import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData([]);

    try {
      const users = await fetchUserData(username, location, minRepos);
      if (users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUserData(users);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && userData.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-20 h-20 rounded-full mb-2"
              />
              <p className="font-bold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
