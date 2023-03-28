import React from "react";
import { BrandCard } from "~/components/cards/BrandCard";
import { ProductCard } from "~/components/cards/ProductCard";
import { brandData, productData } from "~/utils/data";

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

      <div className="grid grid-cols-4 gap-4">
        {productData.map(({ productName, id, imgSrc, price }) => (
          <ProductCard
            key={id}
            imgSrc={imgSrc}
            alt={productName}
            productName={productName}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;
