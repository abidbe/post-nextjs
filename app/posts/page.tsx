import { NextPage } from "next";
import Layout from "../components/layouts";
import PostCard from "../components/posts/PostCard";

interface DataPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const base_url = "https://jsonplaceholder.typicode.com/posts";

const PostsPage: NextPage = async () => {
  const response = await fetch(base_url);
  const data: DataPost[] = await response.json();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>
        <p className="mt-2 text-gray-600">Discover thought-provoking articles and stories from our community.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostsPage;
