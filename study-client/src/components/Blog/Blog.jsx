import { useEffect, useState } from "react";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]); 

  useEffect(() => {
    fetch("/blog.json") 
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
    
  }, []);

  return (
    <div className="min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Section</h1>

      {/* ✅ Add loading state */}
      {blogPosts.length === 0 ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-2 overflow-hidden line-clamp-2">
                {post.description}
              </p>
              <a
                href={post.link || "#"}
                className="mt-3 inline-block text-teal-500 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
