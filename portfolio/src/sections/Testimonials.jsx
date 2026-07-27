import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { testimonialsData } from "../data/miscData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about my work"
          description="Feedback from managers, teammates, and clients I've collaborated with."
        />

        <RevealOnScroll>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ prevEl: ".testimonial-prev", nextEl: ".testimonial-next" }}
              className="pb-12"
            >
              {testimonialsData.map((t) => (
                <SwiperSlide key={t.id}>
                  <GlassCard className="text-center max-w-2xl mx-auto">
                    <FaQuoteLeft className="text-3xl text-primary/40 mx-auto mb-4" aria-hidden="true" />
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mb-3">
                      {t.avatar}
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="testimonial-prev absolute top-1/2 -left-2 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              className="testimonial-next absolute top-1/2 -right-2 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors z-10"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
