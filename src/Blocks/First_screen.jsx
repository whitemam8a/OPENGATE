import React from "react";

const First_screen = ({ title, description, button }) => {
  const Move = () =>
    document.getElementById("Contacts")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="flex flex-row shared-padding pt-10">
      <div className="flex flex-col justify-center md:basis-3/5 gap-6">
        <h1 className="text-[30px] md:text-[48px] pr-[100px]">{title}</h1>
        <p className="pr-[100px]">{description}</p>
        <button className="btn btn-wide button-FS" onClick={Move}>
          {button}
        </button>
      </div>
      <div className="hidden md:block basis-2/5">
        <img src="/pictures/Picture_FS.png" alt="logo OpenGate" />
      </div>
    </div>
  );
};

export default First_screen;
