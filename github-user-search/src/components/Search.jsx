import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await fetchUserData(username);
      setUser(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
          />
          <p>{user.name || user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
