import React from "react";
import { BrandCard } from "~/components/cards/BrandCard";
import { brandData } from "~/utils/data";

function Brand() {
  return (
    <div className="custom-container mx-auto">
      <h2>SHOP BY BRAND</h2>
      <div className="grid grid-cols-6 gap-4">
        {brandData.map(({ brandName, id, imgSrc }) => (
          <BrandCard
            key={id}
            imgSrc={imgSrc}
            alt={brandName}
            brandName={brandName}
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;
