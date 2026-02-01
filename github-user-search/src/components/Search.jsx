import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers([]);
    setPage(1);
    await loadUsers(1, true);
  };

  const loadUsers = async (pageNumber, reset = false) => {
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError(false);

    try {
      const response = await fetchUserData({
        username,
        location,
        minRepos,
        page: pageNumber,
        perPage,
      });
      const items = response.data.items || [];
      if (reset) setUsers(items);
      else setUsers((prev) => [...prev, ...items]);
      setPage(pageNumber);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => loadUsers(page + 1);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          className="border rounded px-3 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border rounded px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min repos"
          className="border rounded px-3 py-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border rounded p-4 flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">
                View profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <div className="flex justify-center mt-6">
          <button onClick={handleLoadMore} className="border px-4 py-2 rounded hover:bg-gray-100">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
