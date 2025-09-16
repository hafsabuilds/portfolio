import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Morade Adel",
    role: "CEO",
    comment:
      "Hafsa delivered results beyond my expectations. Her attention to detail and professionalism made the process seamless.",
  },
  {
    id: 2,
    name: "Kaoutar El Meski",
    role: "Project Manager",
    comment:
      "Working with Hafsa was a pleasure. She was highly responsive, understood our needs, and delivered a polished final product.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Designer",
    comment:
      "Hafsa brought creativity and precision to the project. Every element was well thought-out, making collaboration smooth and enjoyable.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Entrepreneur",
    comment:
      "From start to finish, Hafsa guided the project efficiently. Her insights helped shape the final product exactly as envisioned.",
  },
  {
    id: 5,
    name: "Sadik Kocabaşa",
    role: "CEO",
    comment:
      "Hafsa’s expertise and guidance were invaluable. She turned our ideas into results that truly impressed us.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Adjust number of visible cards based on screen size
  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) setVisibleCount(3);
    else if (window.innerWidth >= 768) setVisibleCount(2);
    else setVisibleCount(1);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }

  return (
    <section
      id="testimonials"
      className="relative z-10 py-24 px-4 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What My <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I value every client’s experience. Here’s some feedback from my clients:
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-8 md:-left-12 bg-card hover:bg-primary hover:text-white text-foreground shadow-md rounded-full p-3 transition-colors duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex gap-6 justify-center">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="w-72 bg-card rounded-lg shadow-xs p-6 flex flex-col items-center text-center"
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  “{t.comment}”
                </p>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute -right-8 md:-right-12 bg-card hover:bg-primary hover:text-white text-foreground shadow-md rounded-full p-3 transition-colors duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
