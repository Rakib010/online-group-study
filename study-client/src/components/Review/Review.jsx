import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review:
      "This platform has made group studies so much easier! Highly recommended.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "David Smith",
    review:
      "I love the interactive assignments and the collaboration features.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophie Lee",
    review: "Great experience! The UI is clean and user-friendly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <FaRegStar key={i} className="text-gray-300" />
      ))}
    </>
  );
};

const Review = () => {
  return (
    <div className="bg-gray-100 p-8 mt-20 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {reviews.map(({ id, name, review, rating, image }) => (
          <div
            key={id}
            className="bg-white p-6 border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="flex">{getStars(rating)}</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
