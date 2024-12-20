import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://getform.io/f/bjjjxnmb", formData);
      console.log("Form submitted successfully:", response.data);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", phone: "", email: "", city: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSuccessMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="flex flex-wrap justify-around w-full pb-20">
        <div className="p-6 rounded-md border-orange-600 flex gap-5 justify-end flex-col">
          <h2>
            Schedule a <br className="hidden lg:block" />
            free demo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="bg-transparent w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium uppercase ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          {successMessage && (
            <p
              className={`text-sm mt-2 ${successMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
                }`}
            >
              {successMessage}
            </p>
          )}
        </div>
        <div>
          <Image
            src="/media/demo.png"
            width={350}
            height={350}
            alt="bg"
            className="sm:w-90% h-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
