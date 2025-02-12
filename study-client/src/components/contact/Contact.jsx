import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">Get in Touch</h3>
          <p className="text-gray-600">
            Feel free to reach out to us for any questions or inquiries.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-teal-500 text-xl" />
              <span>123 Study Lane, Education City</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-teal-500 text-xl" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-teal-500 text-xl" />
              <span>support@studygroup.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-2xl text-gray-600 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl text-gray-600 hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-2xl text-gray-600 hover:text-blue-600">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-teal-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-teal-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
