import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white px-4 relative overflow-hidden">
      
      {/* Floating Particles (Extra Magic ✨) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div 
          className="w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30 absolute -top-10 left-10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="w-24 h-24 bg-indigo-400 rounded-full blur-3xl opacity-30 absolute -bottom-10 right-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Floating & Rotating 404 Animation */}
      <motion.h1 
        className="text-9xl font-extrabold tracking-widest drop-shadow-lg"
        initial={{ y: -100, opacity: 0, rotate: -10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Error Message with Smooth Staggered Animation */}
      <motion.h2 
        className="text-3xl md:text-5xl font-bold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p 
        className="text-lg md:text-xl text-gray-200 mt-2 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        The page you’re looking for doesn’t exist or an error occurred.  
        Please check the URL or return to the homepage.
      </motion.p>

      {/* Animated "Go Back Home" Button with Expanding Ripple Effect */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg 
          hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l-7 7 7 7" />
          </svg>
          Go Back Home
          <motion.span 
            className="absolute inset-0 bg-indigo-200 opacity-20 rounded-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;











// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Error = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white px-4 relative overflow-hidden">
      
//       {/* Floating Particles (Extra Magic ✨) */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <motion.div 
//           className="w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30 absolute -top-10 left-10"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         ></motion.div>
//         <motion.div 
//           className="w-24 h-24 bg-indigo-400 rounded-full blur-3xl opacity-30 absolute -bottom-10 right-10"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         ></motion.div>
//       </div>

//       {/* Floating & Rotating 404 Animation */}
//       <motion.h1 
//         className="text-9xl font-extrabold tracking-widest drop-shadow-lg"
//         initial={{ y: -100, opacity: 0, rotate: -10 }}
//         animate={{ y: 0, opacity: 1, rotate: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         404
//       </motion.h1>

//       {/* Error Message with Smooth Staggered Animation */}
//       <motion.h2 
//         className="text-3xl md:text-5xl font-bold mt-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         Oops! Page Not Found
//       </motion.h2>

//       <motion.p 
//         className="text-lg md:text-xl text-gray-200 mt-2 text-center max-w-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         The page you’re looking for doesn’t exist or an error occurred.  
//         Please check the URL or return to the homepage.
//       </motion.p>

//       {/* Animated Button with Expanding Ripple Effect */}
//       <motion.div 
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.5 }}
//       >
//         <Link
//           to="/"
//           className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold text-lg rounded-lg shadow-lg 
//           hover:bg-indigo-500 hover:text-white transition-all duration-300 relative overflow-hidden"
//         >
//           🔙 Go Back Home
//           <motion.span 
//             className="absolute inset-0 bg-white opacity-10 rounded-lg"
//             animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           ></motion.span>
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

// export default Error;







// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Error = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 text-white px-4 relative overflow-hidden">
      
//       {/* Floating 404 Animation */}
//       <motion.h1 
//         className="text-9xl font-extrabold tracking-widest drop-shadow-lg"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         404
//       </motion.h1>

//       {/* Error Message with Fade-in Animation */}
//       <motion.h2 
//         className="text-3xl md:text-5xl font-bold mt-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         Oops! Page Not Found
//       </motion.h2>

//       <motion.p 
//         className="text-lg md:text-xl text-gray-200 mt-2 text-center max-w-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         The page you’re looking for doesn’t exist or an error occurred.  
//         Please check the URL or return to the homepage.
//       </motion.p>

//       {/* Animated Button with Ripple Effect */}
//       <motion.div 
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.5 }}
//       >
//         <Link
//           to="/"
//           className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold text-lg rounded-lg shadow-lg 
//           hover:bg-indigo-500 hover:text-white transition-all duration-300 relative overflow-hidden"
//         >
//           🔙 Go Back Home
//           <span className="absolute inset-0 bg-white opacity-10 rounded-lg animate-ping"></span>
//         </Link>
//       </motion.div>

//       {/* Glowing Background Elements */}
//       <div className="absolute top-10 left-10 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
//       <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
//     </div>
//   );
// };

// export default Error;









// import { Link } from 'react-router-dom';

// const Error = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4">
//       <h1 className="text-9xl font-extrabold tracking-widest animate-pulse">404</h1>
//       <h2 className="text-3xl md:text-5xl font-bold mt-4">Oops! Page Not Found</h2>
//       <p className="text-lg md:text-xl text-gray-200 mt-2 text-center max-w-lg">
//         The page you’re looking for doesn’t exist or an error occurred.  
//         Please check the URL or return to the homepage.
//       </p>
//       <Link
//         to="/"
//         className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold text-lg rounded-lg shadow-lg 
//         hover:bg-indigo-500 hover:text-white transition-all duration-300"
//       >
//         🔙 Go Back Home
//       </Link>
//     </div>
//   );
// };

// export default Error;













// import { Link } from 'react-router-dom';
// import errorImg from '../assets/err/error.png'

// const Error = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <div className="flex flex-col items-center">
//         <img className='w-80' src={errorImg} alt="" />
//         <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
//         <p className="text-gray-600 mt-2 text-center px-4">
//           The page you’re looking for doesn’t exist or an error occurred. Please check the URL or go back to the homepage.
//         </p>
//         <Link
//           to="/"
//           className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Error;

