import React from "react";

const FeaturesColumn = () => {
  const features = [
    "Creating and digitising:",
    "Publishing collection with metadata on the NFT marketplace (excluding marketplace fees)",
    "Sales strategy consultancy",
    "Develop a marketing strategy and advice with promotion and setting up ads",
    "Promotion through partnerships and participation in exhibitions",
    "Personalised marketing strategy and promotion with monthly consultations and reports",
  ];

  return (
    <div
      className="flex flex-col bg-cover bg-center p-4 md:w-1/3"
      style={{ backgroundImage: "url('/path-to-features-bg.jpg')" }}
    >
      <div className="">
        <h2 className="text-2xl font-bold mb-4">FEATURES</h2>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-xl">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesColumn;
