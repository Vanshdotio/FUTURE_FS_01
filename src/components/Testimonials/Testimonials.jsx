import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../data/portfolioData";
import { RiDoubleQuotesR, RiStarFill } from "react-icons/ri";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  // Helper to extract client initials
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden bg-[#F8FAFC] select-none"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 items-center"
          >
            <p className="text-[#1B8AE5] font-sans font-semibold tracking-widest text-xs uppercase">
              Endorsements
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 tracking-tight">
              what people say about me
            </h2>
            <p className="text-slate-500 font-sans text-sm md:text-base max-w-lg mt-2">
              Feedback and reviews from collaborative partners, product managers, and founders.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true, bulletActiveClass: "swiper-pagination-bullet-active bg-[#1B8AE5]" }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="bg-white p-8 rounded-3xl border border-slate-200/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group cursor-grab active:cursor-grabbing">
                  
                  {/* Card Body */}
                  <div>
                    {/* Stars & Quote */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <RiStarFill key={i} size={16} />
                        ))}
                      </div>
                      <RiDoubleQuotesR className="text-slate-200 group-hover:text-[#1B8AE5]/20 transition-colors duration-300" size={28} />
                    </div>

                    {/* Review text */}
                    <p className="font-sans font-light text-slate-600 text-base leading-relaxed italic mb-8">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Card Footer (Author details) */}
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                    {/* Initials fallback gradient avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1B8AE5] to-[#60A5FA] flex items-center justify-center text-white font-display font-semibold text-md shadow-md">
                      {getInitials(t.name)}
                    </div>
                    
                    {/* Name & Role */}
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-slate-800 text-sm">
                        {t.name}
                      </span>
                      <span className="font-sans text-slate-400 text-xs">
                        {t.role}
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
