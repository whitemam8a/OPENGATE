import React from "react";

const PricingColumn = ({
  title,
  price,
  description,
  features,
  backgroundImage,
}) => {
  return (
    <div
      className="flex flex-col items-center p-6 md:w-1/3 bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* <div className="bg-white text-black p-4 rounded-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-lg">{price}</p>
        <p className="text-sm mt-2">{description}</p>
      </div> */}
      <ul className="mt-4 space-y-4">
        {features.map((included, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`w-6 h-6 ${
                included ? "bg-green-500" : "bg-red-500"
              } rounded-full`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingColumn;
