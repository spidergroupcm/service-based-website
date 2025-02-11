import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../pages/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from '../assets/banner/1.jpg';
import banner2 from '../assets/banner/2.jpg';
import banner3 from '../assets/banner/3.jpg';
import about from '../assets/banner/about.png';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Home = () => {
  const services = useLoaderData(); // Loader fetches all services
  const navigate = useNavigate();

  // Randomly selecting 4 services
  const randomServices = services
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);


  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide web development, UI/UX design, and digital marketing solutions tailored to your needs.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply reach out to us through our contact page, and we’ll guide you through the process.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes! We create customized solutions based on your unique business needs and goals.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing varies depending on project complexity. Contact us for a personalized quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };







  return (
    <div className="rounded-lg shadow-md">

{/* Carousel Section */}
<div className="relative w-full overflow-hidden">
  <div className="carousel flex transition-transform duration-700 ease-in-out">
    {/* Slide 1 */}
    <div className="carousel-item relative w-full">
      <img src={banner1} alt="Banner 1" className="w-full h-[500px] object-cover brightness-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 ">

        <h2 className="text-5xl font-extrabold tracking-wide animate-fadeIn mt-5">Fast & Reliable Service</h2>
        <p className="text-lg mt-3  animate-slideUp">Providing top-notch solutions for your needs</p>

        <a href="#featured" className="mt-5">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Top services
          </button>
        </a>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item relative w-full">
      <img src={banner2} alt="Banner 2" className="w-full h-[500px] object-cover brightness-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
        <h2 className="text-4xl font-extrabold tracking-wide animate-fadeIn">Quality You Can Trust</h2>
        <p className="text-lg mt-3 opacity-90 animate-slideUp">Experience excellence with our services</p>
        <a href="/services" className="mt-5">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Explore All Services
          </button>
        </a>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item relative w-full">
      <img src={banner3} alt="Banner 3" className="w-full h-[500px] object-cover brightness-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
        <h2 className="text-4xl font-extrabold tracking-wide animate-fadeIn">Customer Satisfaction First</h2>
        <p className="text-lg mt-3 opacity-90 animate-slideUp">We prioritize your needs and expectations</p>
        <a href="#featured" className="mt-5">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            See our featured section
          </button>
        </a>
      </div>
    </div>
  </div>

  {/* Navigation Buttons */}
  <button
    className="absolute top-1/2 -translate-y-1/2 left-6 bg-white text-black rounded-full p-3 hover:bg-purple-500 transition-transform transform hover:scale-110"
    onClick={() => {
      document.querySelector('.carousel').scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }}
  >
    ❮
  </button>
  <button
    className="absolute top-1/2 -translate-y-1/2 right-6 bg-white text-black rounded-full p-3 hover:bg-purple-500 transition-transform transform hover:scale-110"
    onClick={() => {
      document.querySelector('.carousel').scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }}
  >
    ❯
  </button>
</div>




<section id="featured" className="py-5 bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600 p-5">
  <div className="text-center p-2">
    <h1 className="text-4xl md:text-4xl font-extrabold px-10 text-yellow-500 mb-4 ">
      Our <span className="text-white">Top Featured Services</span>
    </h1>
    <p className="text-lg text-white max-w-2xl px-10 mx-auto">
    Experience our exceptional premium services, thoughtfully designed for unmatched convenience and a truly effortless lifestyle.
    </p>

  </div>

  <div
    className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12"
    data-aos="fade-up"
  >
    {randomServices.map((service) => (
      <div
        key={service._id}
        className="relative group bg-white opacity-70 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
      >
        <ServiceCard service={service} />
        {/* Removed the blur effect */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center">
          <button
            onClick={() => navigate(`/service-details/${service._id}`)}
           
          >
            
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-12" data-aos="zoom-in">
    <button
      onClick={() => navigate("/services")}
      className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-purple-600 text-white hover:bg-green-500 hover:scale-105 transition-all duration-300"
    >
      See All Services
    </button>
  </div>
</section>




<section id="about" className="bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600  border-t-2 border-b-2 border-white p-10">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left - Image */}
      <div className="w-[400px] h-[400px]">
        <img src={about} alt="About Us" className="rounded-lg shadow-lg w-full" />
      </div>

      {/* Right - Text Content */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
        <h2 className="text-4xl font-bold text-white mb-4">About Our Services</h2>
        <p className="text-lg text-white">
          At <span className="font-semibold text-white">Fasthelpbd</span>, we provide top-notch services tailored to meet your needs. Our expert team ensures high-quality solutions, customer satisfaction, and timely delivery. Whether you're looking for technical support, digital solutions, or business services, we've got you covered!
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <span className="text-white text-3xl">🚀</span>
            <p className="text-white font-medium">Fast & Reliable Service</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-white text-3xl">✅</span>
            <p className="text-white font-medium">100% Customer Satisfaction</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-white text-3xl">💡</span>
            <p className="text-white font-medium">Innovative & Smart Solutions</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-white text-3xl">📞</span>
            <p className="text-white font-medium">24/7 Support Available</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* Testimonials Section - A showcase of client feedback */}
    <div className="bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600  py-16  px-6 md:px-12 border-b-2 border-white" data-aos="fade-up">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">What Our Clients Say</h2>
        
        {/* Testimonials Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Testimonial Card 1 */}
          <div className="bg-white  p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" data-aos="flip-left">
            <p className="italic text-gray-700 text-lg">“The services provided were exceptional and exceeded my expectations!”</p>
            
            {/* User Info */}
            <div className="mt-6 flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full mr-4">J</div>
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" data-aos="flip-right">
            <p className="italic text-gray-700 text-lg">“Highly recommend! Professional and reliable services every time.”</p>
            
            {/* User Info */}
            <div className="mt-6 flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-pink-500 text-white text-lg font-bold rounded-full mr-4">M</div>
              <div>
                <p className="font-semibold text-gray-900">Maria Akter</p>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" data-aos="flip-left">
            <p className="italic text-gray-700 text-lg">“Outstanding experience! The team was very supportive and helpful.”</p>
            
            {/* User Info */}
            <div className="mt-6 flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-green-500 text-white text-lg font-bold rounded-full mr-4">A</div>
              <div>
                <p className="font-semibold text-gray-900">Alex Smith</p>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" data-aos="flip-right">
            <p className="italic text-gray-700 text-lg">“Fantastic service! I will definitely be returning in the future.”</p>
            
            {/* User Info */}
            <div className="mt-6 flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-500 text-white text-lg font-bold rounded-full mr-4">S</div>
              <div>
                <p className="font-semibold text-gray-900">Sophia Lee</p>
                <p className="text-sm text-gray-500">Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600  py-20 px-6 md:px-12 border-b-2 border-white" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>



{/* Highlights Section */}
<div className="bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600  p-10 text-white border-b-2 border-white" data-aos="fade-up">
  <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-8 text-white">
    Why Choose Us?
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    <div className="text-center transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="100">
      <div className="text-5xl mb-4 text-yellow-400">⭐</div>
      <h3 className="font-semibold text-xl mb-2">Top-Rated Services</h3>
      <p className="text-lg">We consistently receive top ratings from our customers for quality and reliability.</p>
    </div>
    <div className="text-center transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
      <div className="text-5xl mb-4 text-purple-400">⏱</div>
      <h3 className="font-semibold text-xl mb-2">Quick Response</h3>
      <p className="text-lg">Our team ensures prompt responses and swift resolution to your service needs.</p>
    </div>
    <div className="text-center transform transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="300">
      <div className="text-5xl mb-4 text-blue-400">💼</div>
      <h3 className="font-semibold text-xl mb-2">Professional Team</h3>
      <p className="text-lg">Our experienced professionals are dedicated to delivering excellence in every service.</p>
    </div>
  </div>
</div>


    </div>
  );
};

export default Home;

