import React from "react";
import Contact_form from "../Components/Contact_form";

const Contact_us = () => {
  return (
    <div id="Contacts" className="flex flex-col shared-padding">
      <div>
        <h2 className="text-center my-10">Contact us</h2>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-full md:flex-1 gap-10">
          <Contact_form button={"GET FREE CONSULTATION"} />
        </div>
        <div className="hidden md:flex flex-1 flex-col items-center justify-center">
          <img src="/pictures/logo.png" alt="Logo" />
          <span>OPENGATE</span>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
