import React from "react";
import CheckMarkIcon from "../../Icons/CheckMark";
import UncheckedIcon from "../../Icons/Unchecked";

const PricingTable = () => {
  const PricingCard = ({ title, description, price }) => (
    <div classNameName="flex flex-col justify-items-start">
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
      // className="w-full bg-cover bg-center rounded-[30px]"
      // style={{ backgroundImage: 'url("/pictures/bg-pricies.png")' }}
    >
      <table className="table-auto w-full border-separate border-spacing-x-5">
        <thead>
          <tr
            className="bg-cover"
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 10%",
            }}
          >
            <th className="px-4 py-2  text-white rounded-t-lg w-[40%]">
              <div className="flex ">
                <p className="table-features">Features</p>
              </div>
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-lg  w-[20%]">
              <PricingCard
                title={"START"}
                description={"For artists who want to try their hand at NFT."}
                price={"490"}
              />
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-lg  w-[20%]">
              <PricingCard
                title={"GROWTH"}
                description={
                  "For artists looking to expand their presence in the NFT world."
                }
                price={"890"}
              />
            </th>
            <th className="px-4 py-2 bg-white text-black rounded-lg  w-[20%]">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 25%",
            }}
          >
            <td className="pt-3 border-t-2 border-t-indigo-500">
              <p className="table-features-title">Creating and digitising:</p>
            </td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
            <td className="px-4 py-2 border-t-2 border-t-indigo-500"></td>
          </tr>
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 29%",
            }}
          >
            <td className="px-4 ">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 32%",
            }}
          >
            <td className="px-4 ">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 35%",
            }}
          >
            <td className="px-4 pb-3 border-b-2 border-b-indigo-500">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 38%",
            }}
          >
            <td className="pt-3 ">
              <p className="table-features-title">
                Publishing collection with metadata on the NFT marketplace
              </p>
            </td>
            <td className="px-4 "></td>
            <td className="px-4 "></td>
            <td className="px-4 "></td>
          </tr>
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 42%",
            }}
          >
            <td className="pr-4 pb-3 border-b-2 border-b-indigo-500">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 46%",
            }}
          >
            <td className="pr-4 py-2  border-b-2 border-b-indigo-500">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 52%",
            }}
          >
            <td className="pr-4 py-3 border-b-2 border-b-indigo-500 ">
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 58%",
            }}
          >
            <td className="pr-4 py-3 border-b-2 border-b-indigo-500">
              <FeaturesText
                text={
                  "DPromotion through partnerships and participation in exhibitions."
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
          <tr
            className="bg-cover bg-center "
            style={{
              backgroundImage: 'url("/pictures/bg-pricies.png")',
              backgroundPosition: "0% 64%",
            }}
          >
            <td className="pr-4 py-3 rounded-bl-lg">
              <FeaturesText
                text={
                  "Personalised marketing strategy and promotion with monthly consultations and reports."
                }
                price={"449"}
              />
            </td>
            <td className="justify-items-center">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center">
              <UncheckedIcon />
            </td>
            <td className="justify-items-center rounded-br-lg">
              <CheckMarkIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
