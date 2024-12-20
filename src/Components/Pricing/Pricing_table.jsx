import React from "react";
import CheckMarkIcon from "../../Icons/CheckMark";
import UncheckedIcon from "../../Icons/Unchecked";

const PricingTable = () => {
  const PricingCard = ({ title, description, price }) => (
    <div className="flex flex-col justify-items-start">
      <p className="table-head-title">{title}</p>
      <p className="table-head-desc">{description}</p>
      <p className="table-head-price">€ {price}</p>
    </div>
  );

  const FeaturesText = ({ text, price }) => (
    <div className="flex justify-between">
      <p className="table-features-description pr-4">{text}</p>
      <p>€{price}</p>
    </div>
  );

  return (
    <div
      className="w-full bg-black "
      // className="w-full bg-cover bg-[#5D1140] rounded-[30px]"
      // style={{ backgroundImage: 'url("/pictures/bg-pricies.png")' }}
    >
      <table className="table-auto w-full border-separate border-spacing-x-5">
        <thead>
          <tr
            className="bg-cover bg-white"
            style={
              {
                // background: "linear-gradient(to bottom, #000000, #190410)",
                // backgroundImage: 'url("/pictures/bg-pricies.png")',
                // backgroundPosition: "0% 10%",
              }
            }
          >
            <th className="px-4 py-2  text-black rounded-t-lg w-[40%]">
              <div className="flex ">
                <p className="table-features">Features</p>
              </div>
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-t-lg  w-[20%]">
              <PricingCard
                title={"START"}
                description={"For artists who want to try their hand at NFT."}
                price={"490"}
              />
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-t-lg  w-[20%]">
              <PricingCard
                title={"GROWTH"}
                description={
                  "For artists looking to expand their presence in the NFT world."
                }
                price={"890"}
              />
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-t-lg  w-[20%]">
              <PricingCard
                title={"MEGA"}
                description={
                  "For artists looking to expand their presence in the NFT world."
                }
                price={"1490"}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-cover bg-[#180410] " style={{}}>
            <td className="pt-3 px-6 border-t-2 border-t-indigo-500">
              <p className="table-features-title">Creating and digitising:</p>
            </td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
          </tr>
          <tr className="bg-cover bg-[#1F0615] " style={{}}>
            <td className="px-10 ">
              <FeaturesText text={"- up to 5 NFT works"} price={"229"} />
            </td>
            <td className="px-4 ">
              <div className="justify-items-center">
                <CheckMarkIcon />
              </div>
            </td>
            <td className="justify-items-center">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center ">
              <UncheckedIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#1F0615] " style={{}}>
            <td className="px-10 ">
              <FeaturesText text={"- up to 10 NFT works"} price={"399"} />
            </td>
            <td className="justify-items-center">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center">
              <CheckMarkIcon />
            </td>
            <td className="justify-items-center">
              <UncheckedIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#1F0615] " style={{}}>
            <td className="px-10 pb-3 border-b-2 border-b-indigo-500">
              <FeaturesText text={"- up to 20 NFT works"} price={"699"} />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#340A24] " style={{}}>
            <td className="pt-3 px-6">
              <p className="table-features-title">
                Publishing collection with metadata on the NFT marketplace
              </p>
            </td>
            <td className="px-4 "></td>
            <td className="px-4 "></td>
            <td className="px-4 "></td>
          </tr>
          <tr className="bg-cover bg-[#3A0A28] " style={{}}>
            <td className="pl-6 pr-10 pb-3 border-b-2 border-b-indigo-500">
              <FeaturesText
                text={"*excluding marketplace fees"}
                price={"199"}
              />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#430E2F] " style={{}}>
            <td className="pl-6 pr-10 py-2  border-b-2 border-b-indigo-500">
              <FeaturesText text={"Sales strategy consultancy"} price={"199"} />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#530F39] " style={{}}>
            <td className="pl-6 pr-10 py-3 border-b-2 border-b-indigo-500 ">
              <FeaturesText
                text={
                  "Develop a marketing strategy and advice with promotion and setting up ads."
                }
                price={"349"}
              />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#540F3A] " style={{}}>
            <td className="pl-6 pr-10 py-3 border-b-2 border-b-indigo-500">
              <FeaturesText
                text={
                  "Promotion through partnerships and participation in exhibitions."
                }
                price={"299"}
              />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center border-b-2 border-b-indigo-500">
              <CheckMarkIcon />
            </td>
          </tr>
          <tr className="bg-cover bg-[#5D1140] " style={{}}>
            <td className="pl-6 pr-10 py-3 rounded-b-lg">
              <FeaturesText
                text={
                  "Personalised marketing strategy and promotion with monthly consultations and reports."
                }
                price={"449"}
              />
            </td>
            <td className="justify-items-center rounded-b-lg">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center rounded-b-lg">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center rounded-b-lg">
              <CheckMarkIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
