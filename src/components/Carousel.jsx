// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import bgimg1 from "../assets/images/carousel1.jpg";
import bgimg2 from "../assets/images/carousel2.jpg";
import bgimg3 from "../assets/images/carousel3.jpg";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${bgimg1})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            {/* Text Content */}
            <div className="z-10 px-6">
              <h2 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-xl">
                Get Your Web Development Projects Done in Minutes
              </h2>
              <p className="mt-4 text-lg text-gray-200 sm:text-xl drop-shadow-md">
                Build modern and responsive websites effortlessly with our team
                of experts.
              </p>
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${bgimg2})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            {/* Text Content */}
            <div className="z-10 px-6">
              <h2 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-xl">
                Get Your Graphics Design Projects Done in Minutes
              </h2>
              <p className="mt-4 text-lg text-gray-200 sm:text-xl drop-shadow-md">
                Transform your ideas into stunning visuals with professional
                design services.
              </p>
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${bgimg3})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            {/* Text Content */}
            <div className="z-10 px-6">
              <h2 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-xl">
                Start Your Digital Marketing Campaigns Up and Running
              </h2>
              <p className="mt-4 text-lg text-gray-200 sm:text-xl drop-shadow-md">
                Reach your audience and achieve your marketing goals with ease.
              </p>
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
