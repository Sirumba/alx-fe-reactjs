import { useQuery } from "react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  };

  const { data, error, isLoading, refetch, isFetching } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 5000, // stays fresh for 5 seconds
      cacheTime: 1000 * 60 * 5, // cache kept for 5 minutes
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Refetch Posts
        </button>

        {isFetching && <p className="text-gray-600">Refreshing...</p>}
      </div>

      <ul className="space-y-2">
        {data?.map((post) => (
          <li key={post.id} className="border p-3 rounded shadow">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
