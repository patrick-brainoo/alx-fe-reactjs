import { useState } from "react";
import { useQuery } from "react-query";

function fetchPosts(page) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  ).then((res) => res.json());
}

function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      // ✅ required advanced options
      cacheTime: 1000 * 60 * 10,        // 10 minutes
      staleTime: 1000 * 60 * 2,         // 2 minutes
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>

        {isFetching && <span> Updating...</span>}
      </div>
    </div>
  );
}

export default PostsComponent;
