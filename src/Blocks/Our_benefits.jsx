import React from "react";
import Card from "../Components/Card_Benefits";

const Our_benefits = ({ title }) => {
  return (
    <div id="Benefits" className="flex flex-col shared-padding">
      <div>
        <h2 className="text-center my-10">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <Card
          title={"Simple and easy to work with"}
          description={
            "Regardless of your experience with digital, we can help you create and sell NFT with ease, removing any technical barriers."
          }
        />
        <Card
          title={"Promoting your unique brand"}
          description={
            "We can help strategize and increase the visibility of your art to bring more attention to your work."
          }
        />
        <Card
          title={"Entering the international market"}
          description={
            "We provide access to global NFT platforms where your work can find new fans and buyers around the world."
          }
        />
        <Card
          title={"New financial opportunities"}
          description={
            "NFT will open up new revenue channels for you, allowing you to monetize your creativity on new levels."
          }
        />
      </div>
    </div>
  );
};

export default Our_benefits;
