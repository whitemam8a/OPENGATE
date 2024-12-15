import React from "react";
import PricingTable from "../Components/Pricing/Pricing_table";
import FeaturesColumn from "../Components/Pricing/Features_Column";
import PricingColumn from "../Components/Pricing/Pricing_Column";

const Our_prices = () => {
  return (
    <div id="Prices" className="flex flex-col shared-padding">
      <div>
        <h2 className="text-center my-10">OUR PRICES</h2>
      </div>
      <div className="flex ">
        <PricingTable />
      </div>
    </div>
  );
};

export default Our_prices;
