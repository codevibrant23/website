import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center mt-5 ">
        <div className="flex justify-between w-[90%]">
          <div className="flex gap-5">
            <span>
              <img src="/media/logo.png" width={50} height={50} alt="logo" />
            </span>
            <div className="hidden max-[700px]:block">
              <label>
                <div
                  className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <input className="hidden peer" type="checkbox" />
                  <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                  <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                  <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                </div>
              </label>
            </div>
            <span
              className="font-semibold px-5 max-[700px]:hidden"
              style={{
                display: "flex",
                background: "white",
                borderRadius: "10px",
                gap: "10px",
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
          <div className="flex gap-4 max-[700px]:hidden">
            <button className="px-6 text-lg text-[#ff6600] border-2 border-[#ff6600] rounded-md font-bold hover:bg-[#ff6600]/5 transition-colors">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-[#ff6600] text-lg text-white rounded-md font-bold hover:bg-[#ff6600]/90 transition-colors">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-lg z-50 min-[701px]:hidden">
          <div className="flex flex-col items-center py-4 gap-4">
            <span className="hover:text-[#ff6600] cursor-pointer">
              ABOUT US
            </span>
            <span className="hover:text-[#ff6600] cursor-pointer">POS</span>
            <span className="hover:text-[#ff6600] cursor-pointer">ADD-ONS</span>
            <span className="hover:text-[#ff6600] cursor-pointer">
              OUTLET TYPES
            </span>
            <span className="hover:text-[#ff6600] cursor-pointer">PRICING</span>
            <div className="flex flex-col gap-4 w-[80%]">
              <button className="px-6 py-2 text-xl text-[#ff6600] border-2 border-[#ff6600] rounded-md font-bold hover:bg-[#ff6600]/5 transition-colors">
                LOGIN
              </button>
              <button className="px-6 py-2 bg-[#ff6600] text-xl text-white rounded-md font-bold hover:bg-[#ff6600]/90 transition-colors">
                BOOK A DEMO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
