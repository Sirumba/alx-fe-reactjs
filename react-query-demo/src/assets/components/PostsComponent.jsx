import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const { data, isLoading, error, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 5000, // Demonstrates caching
      cacheTime: 1000 * 60, // 1 minute cache
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{ marginBottom: "10px", padding: "10px" }}
      >
        Refetch Posts
      </button>

      {isFetching && <p>Refreshing...</p>}

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
