// Testimonials.jsx

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper and related styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import your data and component
import data from "./data";
import Testimonial from "./Testimonial";

// Import your custom styling
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
