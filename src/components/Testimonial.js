import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Vaidehi Singha",
    role: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
    image: "/api/placeholder/80/80",
  },
  {
    id: 2,
    name: "Vaidehi Singha",
    role: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus",
    image: "/api/placeholder/80/80",
  },
  {
    id: 3,
    name: "Vaidehi Singha",
    role: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus",
    image: "/api/placeholder/80/80",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full py-16 bg-[#FDF8F3] overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-16">
        What Our Customers
        <br />
        Say About Us
      </h1>

      <div className="relative max-w-[90rem] mx-auto px-4">
        <div className="flex justify-center items-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 33.333 - 33.333}%)`,
              width: `${testimonials.length * 33.333}%`,
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentSlide;

              return (
                <div
                  key={testimonial.id}
                  className={`w-1/3 px-4 transition-all duration-500 ${
                    !isActive ? "opacity-50 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="bg-white rounded-[32px] shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] p-12 relative mt-10">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s profile`}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                    </div>

                    <div className="text-center pt-12">
                      <p className="text-gray-600 mb-8 leading-relaxed text-base">
                        {testimonial.content}
                      </p>
                      <h3 className="text-[#FF5C00] font-semibold text-lg mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#FF5C00] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
