import React from "react";

const Card_Progress = ({ stepNumber, title, description }) => {
  return (
    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 w-full">
      <div className="flex-grow">
        <div className="flex items-center">
          <div className="flex-shrink-0 text-3xl font-bold text-black mr-4">
            {stepNumber}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <hr className="my-2 border-t-4 border-gray-300 -mx-6" />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card_Progress;
