import React from "react";

const First_screen = ({ title, description, button }) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col justify-center basis-3/5 gap-4">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn btn-wide button-FS">{button}</button>
      </div>
      <div className="hidden md:block basis-2/5">
        <img src="/pictures/Picture_FS.png" alt="logo OpenGate" />
      </div>
    </div>
  );
};

export default First_screen;
