import React from "react";
import Card_Progress from "../Components/Card_Progress";

const Working_Progress = () => {
  return (
    <div id="WP" className="flex flex-col shared-padding">
      <div className="my-10 md:my-[80px]">
        <h2 className="text-center my-10">WORKING PROGRESS</h2>
      </div>
      <div className="working-progress-img">
        <div className="flex flex-col gap-4 md:w-[70%] md:self-start">
          <Card_Progress
            stepNumber={"01"}
            title={"Consultation and Preparation"}
            description={
              "First, we offer a free consultation to discuss your project, creative concept, and possible ways to monetize your artwork through NFTs."
            }
          />
          <Card_Progress
            stepNumber={"02"}
            title={"NFT Creation"}
            description={
              "Our specialists will help you digitize your art (if it was created using traditional techniques), and create the NFT using blockchain technology, ensuring your intellectual property rights are protected."
            }
          />
          <Card_Progress
            stepNumber={"03"}
            title={"Listing on Platforms"}
            description={
              "After creating your NFT, we will list your work on popular NFT platforms such as OpenSea or Blur, giving you access to an international audience of buyers and collectors."
            }
          />
          <Card_Progress
            stepNumber={"04"}
            title={"Promotion"}
            description={
              "We will assist with marketing efforts to increase the visibility of your NFT, including social media advertising, participation in virtual exhibitions, and other events."
            }
          />
          <Card_Progress
            stepNumber={"05"}
            title={"Sales Support"}
            description={
              "We will support you throughout the sales process, providing consulting on pricing strategies and promotion to ensure the success of your NFT."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Working_Progress;
