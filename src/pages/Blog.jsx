import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "A Sparkling Home - Thanks to FastHelpBD!",
    content:
      "I booked a home cleaning service, and the results were amazing. The team was punctual and professional. Highly recommended!",
    author: "Sarah J., Dhaka",
  },
  {
    title: "Quick and Reliable Courier Service",
    content:
      "FastHelpBD delivered my package on time and without any hassle. Their tracking system kept me updated throughout the process.",
    author: "Ahmed R., Rangpur",
  },
  {
    title: "Professional Plumbing Service",
    content:
      "I had a major plumbing issue, and FastHelpBD sent a skilled plumber who fixed everything in no time. Great experience!",
    author: "Nusrat A., Chattogram",
  },
  {
    title: "Effortless Home Shifting",
    content:
      "Moving to a new apartment was stress-free with FastHelpBD. The team handled everything smoothly and efficiently!",
    author: "Rahim K., Sylhet",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center text-green-700 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Service Stories & Experiences
        </motion.h1>
        <motion.p
          className="text-center text-gray-800 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Real stories from our service providers and receivers, sharing their
          experiences and journey.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
              <div className="mt-4 text-md text-green-700 font-semibold italic">
                - {post.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


