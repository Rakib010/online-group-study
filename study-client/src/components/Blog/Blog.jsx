const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Enhancing Group Study with Online Collaboration",
      description:
        "Discover how online group-study applications improve collaborative learning and make studying more interactive.",
      image:
        "https://i.ibb.co.com/20PvRZ69/photo-1519389950473-47ba0277781c-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      id: 2,
      title: "Best Practices for Effective Online Assignments",
      description:
        "Learn the key strategies to create, complete, and grade assignments efficiently in a virtual environment.",
      image:
        "https://i.ibb.co.com/6cfzMSSx/premium-photo-1683120640224-9e8e52ed7ab3-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      id: 3,
      title: "How Peer Evaluation Improves Learning Outcomes",
      description:
        "Explore the benefits of peer grading and feedback in an online group-study setting.",
      image:
        "https://i.ibb.co.com/BKH9CLj2/photo-1454165804606-c3d57bc86b40-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
  ];

  return (
    <div className="min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Section</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-5 border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {post.description}
            </p>
            <a className="mt-3 inline-block text-teal-500 font-medium hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
