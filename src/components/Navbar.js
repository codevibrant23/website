import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center mt-5">
        <div className="flex justify-between w-[90%]">
          <div className="flex gap-10 justify-between w-full ">
            <span>
              <img src="/media/logo.png" width={50} height={50} alt="logo" />
            </span>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center gap-1.5"
              >
                <div className="w-6 h-[2px] bg-black rounded-sm"></div>
                <div className="w-6 h-[2px] bg-black rounded-md"></div>
                <div className="w-6 h-[2px] bg-black rounded-md"></div>
              </button>
            </div>
            <span
              className="font-semibold px-5 hidden lg:flex"
              style={{
                background: "white",
                borderRadius: "10px",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>ABOUT US</span>
              <span>POS</span>
              <span>ADD-ONS</span>
              <span>OUTLET TYPES</span>
              <span>PRICING</span>
            </span>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="px-6 text-lg text-[#ff6600] border-2 border-[#ff6600] rounded-md font-bold hover:bg-[#ff6600]/5 transition-colors">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-[#ff6600] text-lg text-white rounded-md font-bold hover:bg-[#ff6600]/90 transition-colors">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Modal Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Content */}
            <div className="flex flex-col items-center pt-16 pb-8 gap-6">
              <h2 className="text-2xl font-bold mb-4">Menu</h2>
              <span className="hover:text-[#ff6600] cursor-pointer text-lg">
                ABOUT US
              </span>
              <span className="hover:text-[#ff6600] cursor-pointer text-lg">
                POS
              </span>
              <span className="hover:text-[#ff6600] cursor-pointer text-lg">
                ADD-ONS
              </span>
              <span className="hover:text-[#ff6600] cursor-pointer text-lg">
                OUTLET TYPES
              </span>
              <span className="hover:text-[#ff6600] cursor-pointer text-lg">
                PRICING
              </span>
              <div className="flex flex-col gap-4 w-[80%] mt-4">
                <button className="px-6 py-2 text-lg text-[#ff6600] border-2 border-[#ff6600] rounded-md font-bold hover:bg-[#ff6600]/5 transition-colors">
                  LOGIN
                </button>
                <button className="px-6 py-2 bg-[#ff6600] text-lg text-white rounded-md font-bold hover:bg-[#ff6600]/90 transition-colors">
                  BOOK A DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
