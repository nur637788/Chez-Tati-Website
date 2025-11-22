import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import Profile from "./ProfilePage/Profile";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // 🔹 Mobile menu link clicked → close menu
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-10">
      <div className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-5 md:px-10 xl:px-20 py-3">

          {/* 🔹 Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="h-10" src="/icons/logo.png" alt="logo" />
          </div>

          <div className="flex gap-5">
            {/* ----main search bar----- */}
            <div className="border border-gray-300 rounded-full hidden md:block">
              <input type="search" id="search" placeholder="search" className=" focus:ring-0 focus:outline-none pl-3" />
              <label htmlFor="search" className="bg-[#EA5326] px-2 rounded-r-full py-[2px] text-white">search</label>
            </div>

            {/* 🔹 Desktop Navigation */}
            <nav className="hidden md:flex gap-5 text-gray-700 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "hover:text-pink-500"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "hover:text-pink-500"
                }
              >
                About us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "hover:text-pink-500"
                }
              >
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* 🔹 Right Icons */}
          <div className="hidden md:flex gap-4 items-center relative">
            <NavLink to="/account" className="hover:text-pink-500">
              <FiHeart className="hover:scale-110 duration-300" />
            </NavLink>

            <NavLink to="/cart" className="hover:text-pink-500 relative">
              <FaCartArrowDown className="hover:scale-110 duration-300" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[8px] px-1 rounded-full">
                {totalQuantity}
              </span>
            </NavLink>

            {/* 🔹 Profile Icon */}
            <button
              onClick={() => setProfileOpen(true)}
              className="hover:text-pink-500"
            >
              <CiUser className="hover:scale-110 duration-300" />
            </button>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 🔹 Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden bg-blue-50 border-t border-gray-200">
            <nav className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
              <NavLink to="/" onClick={handleMobileLinkClick}>
                Home
              </NavLink>

              <NavLink to="/about" onClick={handleMobileLinkClick}>
                About us
              </NavLink>

              <NavLink to="/contact" onClick={handleMobileLinkClick}>
                Contact us
              </NavLink>

              {/* Icons inside mobile menu */}
              <div className="flex gap-4 mt-4">
                <NavLink to="/account" onClick={handleMobileLinkClick}>
                  <FiHeart className="hover:scale-110 duration-300" />
                </NavLink>

                <NavLink to="/cart" onClick={handleMobileLinkClick}>
                  <FaCartArrowDown className="hover:scale-110 duration-300" />
                </NavLink>

                <button
                  onClick={() => {
                    handleMobileLinkClick();
                    setProfileOpen(true);
                  }}
                >
                  <CiUser className="hover:scale-110 duration-300" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* 🔹 Profile Popup */}
      <Profile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}

export default Navbar;
