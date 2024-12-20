import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Types from "@/components/Types";
import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/features/onlineorder.png",
    name: "Order Online",
  },
  {
    icon: "/features/loyalty.png",
    name: "Loyalty",
  },
  {
    icon: "/features/costumer.png",
    name: "Customer Satisfaction",
  },
  {
    icon: "/features/pa.png",
    name: "Payments & Accounting",
  },
];
const index = () => {
  return (
    <>
      <main className="my-2 w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <section className="px-4 mt-10">
          <div className="flex flex-col w-full text-center gap-3 md:gap-5">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
              A POS made for all your needs
            </h2>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              A quick and easy-to-use restaurant billing software that makes
              managing high order volumes butter smooth
            </p>
          </div>
        </section>

        {/* Header Section */}

        {/* Feature Sections */}
        <section className="px-4 md:px-6 lg:px-8 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-[url('/media/sec2bg.png')] bg-cover bg-center p-4 md:p-8 rounded-xl">
            <div className="w-full lg:w-[60%]">
              <Image
                src="/media/sec2img1.png"
                alt="Quick Billing Software"
                className="w-full h-auto object-contain"
                width={800}
                height={800}
                priority
              />
            </div>
            <div className="w-full lg:w-[40%] space-y-4">
              <h2>A quick billing software</h2>
              <p className="text-sm md:text-base">
                Take orders, punch bills and generate KOT. Accept payments
                either by splitting bill or merging tables. Easily apply
                discounts and coupons. All of this, and more, is easy and quick
                with Mantra POS.
              </p>
              <button className="px-6 py-2 bg-[#ff6601] text-white rounded-lg text-base md:text-lg lg:text-xl font-semibold w-full md:w-auto">
                Explore all features
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-8 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 bg-[url('/media/sec2bg.png')] bg-cover bg-center p-4 md:p-8 rounded-xl">
            <div className="w-full lg:w-[60%]">
              <Image
                src="/media/sec2img1.png"
                alt="Cart Management"
                className="w-full h-auto object-contain"
                width={800}
                height={800}
                priority
              />
            </div>
            <div className="w-full lg:w-[40%] space-y-4">
              <h2>Easy cart management</h2>
              <p className="text-sm md:text-base">
                Mantra POS makes managing your cart a breeze. You can quickly
                add items, change how many you want, and see the total cost
                right away. It's easy to take things out of your cart too.
              </p>
              <button className="px-6 py-2 bg-[#ff6601] text-white rounded-lg text-base md:text-lg lg:text-xl font-semibold w-full md:w-auto">
                Explore all features
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-8 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-[url('/media/sec2bg.png')] bg-cover bg-center p-4 md:p-8 rounded-xl">
            <div className="w-full lg:w-[60%]">
              <Image
                src="/media/sec2img1.png"
                alt="Real-time Reports"
                className="w-full h-auto object-contain"
                width={800}
                height={800}
                priority
              />
            </div>
            <div className="w-full lg:w-[40%] space-y-4">
              <h2>Get real-time reports</h2>
              <p className="text-sm md:text-base">
                Let Mantra POS automatically track your business activities and
                provide you error free reports on your restaurant's day-end
                sales, online orders reports
              </p>
              <button className="px-6 py-2 bg-[#ff6601] text-white rounded-lg text-base md:text-lg lg:text-xl font-semibold w-full md:w-auto">
                Explore all features
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-6 lg:px-8 py-10 md:py-16 bg-[#fee2ca] lg:pb-[8rem] ">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 p-4 md:p-8 rounded-xl">
            <div className="w-full lg:w-[60%]">
              <Image
                src="/media/111.png"
                alt="Cart Management"
                className="w-full h-auto object-contain"
                width={800}
                height={800}
                priority
              />
            </div>
            <div className="w-full lg:w-[40%] space-y-4">
              <h2>Multiple integrations - single dashboard</h2>
              <p className="text-sm md:text-base">
                Manage 150+ third-party integrations and services directly from
                Mantra POS
              </p>
              <button className="px-6 py-2 bg-[#ff6601] text-white rounded-lg text-base md:text-lg lg:text-xl font-semibold w-full md:w-auto">
                Explore all features
              </button>
            </div>
          </div>
          <div className="flex lg:gap-5 justify-center mt-40 flex-wrap gap-[150px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center pb-5 lg:w-[300px] md:w-[300px] gap-5 "
                style={{
                  border: "2px solid white",
                  borderRadius: "20px 0 20px 0",
                }}
              >
                <Image
                  src={feature.icon}
                  width={200}
                  height={200}
                  alt={feature.name}
                  className="mt-[-40%]"
                />
                <h3 className="text-xl font-semibold text-orange-600">
                  {feature.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 relative py-20 lg:py-[6rem] text-center">
          <Image
            src="/media/vector.svg"
            width={350}
            height={350}
            alt="b g"
            className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 z-10"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl">Outlet Types</h2>
            <h3 className="text-6xl font-bold">
              Built for all types of food business
            </h3>
            <p>
              The all-in-one Restaurant Management System for all types of
              restaurant formats and food outlets
            </p>
          </div>
          <Types />
        </section>
        {/* <section>
          <Testimonial />
        </section> */}
        <section>
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default index;
