import React from "react";
import PricingTable from "../Components/Pricing/Pricing_table";
import FeaturesColumn from "../Components/Pricing/Features_Column";
import PricingColumn from "../Components/Pricing/Pricing_Column";

const Our_prices = ({ title }) => {
  return (
    <div id="Prices" className="flex flex-col shared-padding">
      <div>
        <h2 className="text-center my-10">{title}OUR PRICES</h2>
      </div>
      <div className="flex ">
        <PricingTable />
        {/* <FeaturesColumn />
        <PricingColumn
          title={"Start"}
          price={"490"}
          description={"For artists who want to try their hand at NFT."}
          features={[true, false, false, false, false, false]}
        /> */}
      </div>
      {/* <PricingColumn /> */}
    </div>
  );
};

export default Our_prices;
