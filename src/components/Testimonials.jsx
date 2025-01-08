// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The service was amazing! My project was delivered on time and exceeded expectations.",
      name: "Alice Johnson",
      image: "https://via.placeholder.com/50", // Replace with client image
      role: "Startup Founder",
    },
    {
      id: 2,
      text: "Professional and reliable. I couldn't be happier with the results!",
      name: "Michael Brown",
      image: "https://via.placeholder.com/50",
      role: "Freelance Designer",
    },
    {
      id: 3,
      text: "Their team is outstanding. They went above and beyond to meet my requirements!",
      name: "Jessica Lee",
      image: "https://via.placeholder.com/50",
      role: "Entrepreneur",
    },
    {
      id: 4,
      text: "Fantastic experience. The team is skilled and highly responsive.",
      name: "David Wilson",
      image: "https://via.placeholder.com/50",
      role: "Tech Lead",
    },
    {
      id: 5,
      text: "They provided excellent service and were very easy to work with.",
      name: "Emily Clark",
      image: "https://via.placeholder.com/50",
      role: "Content Creator",
    },
    {
      id: 6,
      text: "Outstanding results! I highly recommend their services to anyone.",
      name: "Tom Davis",
      image: "https://via.placeholder.com/50",
      role: "Marketing Manager",
    },
  ];

  return (
    <div className=" py-10 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          What Our Clients Say
        </h2>
        <p className="text-black mb-8">
          Hear from some of our happy clients.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          speed={1500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2, // Medium devices
            },
            1024: {
              slidesPerView: 3, // Large devices
            },
          }}
          modules={[Autoplay]}
          className="mySwiper grid grid-cols-1 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-black italic mb-4">{testimonial.text}</p>
                <h3 className="font-bold text-black">{testimonial.name}</h3>
                <span className="text-sm text-black">
                  {testimonial.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
