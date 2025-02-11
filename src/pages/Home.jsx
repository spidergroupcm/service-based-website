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





    </div>
  );
};

export default Home;

