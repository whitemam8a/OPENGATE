import React, { useState } from "react";

const Navbar = ({ navbar_title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar navbar_custom">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{navbar_title}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#Benefits">OUR BENEFITS</a>
          </li>
          <li>
            <a href="#Prices">OUR PRICES</a>
          </li>
          <li>
            <a href="#WP">WORKING PROCESS</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
          <li>
            <a href="#Contacts">GET IN TOUCH</a>
          </li>
        </ul>
      </div>
      <div className="dropdown relative">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0 lg:right-auto"
          >
            <li>
              <a href="#Benefits">OUR BENEFITS</a>
            </li>
            <li>
              <a href="#Prices">OUR PRICES</a>
            </li>
            <li>
              <a href="#WP">WORKING PROCESS</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <a href="#Contacts">GET IN TOUCH</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
