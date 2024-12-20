import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full px-4 md:px-6 lg:px-8 pt-12 md:py-16 lg:py-20 bg-[url('/media/hero-bg.png')] bg-cover bg-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between gap-8 md:gap-12">          {/* Content Side */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Restaurant
              <br />
              POS software
              <br />
              made simple!
            </h1>

            <p className="text-sm md:text-base lg:text-lg max-w-xl">
              Manages all your restaurant operations efficiently so
              that you can focus on growing your brand, like a real
              boss!
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 bg-[#ff6601] text-white rounded-lg 
                text-lg md:text-xl lg:text-2xl font-semibold
                w-full md:w-auto min-w-[200px]
                hover:bg-[#e55a00] transition-colors duration-300
                shadow-lg hover:shadow-xl">
                BOOK TABLE
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <img
              src="/media/Hero1.svg"
              alt="Restaurant POS System,"
              width={800}
              height={800}
              className="w-full h-auto max-w-[500px] mx-auto transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;