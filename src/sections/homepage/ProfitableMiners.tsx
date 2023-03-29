import { Button } from "~/components/buttons/Button";
import { ProductCard } from "~/components/cards/ProductCard";
import { productData } from "~/utils/data";

export default function ProfitableMiners() {
  return (
    <div className="bg-bgPrimary py-14">
      <div className="custom-container mx-auto">
        <h2 className="text-center text-3xl font-semibold">
          MORE PROFITABLE MINERS
        </h2>
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

        {/* Products */}
        <div className="my-8 grid grid-cols-1 gap-4 px-5 xs:grid-cols-2 sm:px-10  md:px-28 lg:grid-cols-4 lg:px-0 xl:px-20">
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
    </div>
  );
}
