import { Button } from "~/components/buttons/Button";
import { BrandCard } from "~/components/cards/BrandCard";
import { ProductCard } from "~/components/cards/ProductCard";
import { brandData, productData } from "~/utils/data";

function ShopByBrand() {
  return (
    <div className="custom-container mx-auto py-14">
      <h2 className="text-center text-3xl font-semibold">SHOP BY BRAND</h2>
      <div className="mt-1 flex justify-center text-btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      {/* Brand Models */}
      <div className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {brandData.map(({ brandName, id, imgSrc }) => (
          <BrandCard
            key={id}
            imgSrc={imgSrc}
            alt={brandName}
            brandName={brandName}
          />
        ))}
      </div>
      {/* Products */}
      <div className="my-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:px-10  md:px-28 lg:grid-cols-4 lg:px-0 xl:px-20">
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

      <div className=" mt-10 flex justify-center">
        <Button title="View All Products" />
      </div>
    </div>
  );
}

export default ShopByBrand;
