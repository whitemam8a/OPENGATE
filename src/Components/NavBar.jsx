import React, { useState } from "react";

const Navbar = ({ navbar_title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar navbar_custom shared-padding">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          {" "}
          <img src="/pictures/logo.png" alt="Logo" className="h-12 w-12" />
          {navbar_title}
        </a>
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
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
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
