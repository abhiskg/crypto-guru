import Image from "next/image";

const BestSellerBrands = () => {
  return (
    <section className="custom-container mx-auto py-14">
      <h2 className="text-center text-3xl font-semibold">BEST SELLER BRANDS</h2>

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

      {/* Brands Section */}
      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
        <Image
          src="/images/logo/binance-logo.png"
          alt="Binance Logo"
          width={200}
          height={109}
        />

        <Image
          src="/images/logo/bitfinex-logo.png"
          alt="Bitfinex Logo"
          width={200}
          height={109}
        />
        <Image
          src="/images/logo/choincheck-logo.png"
          alt="Choincheck Logo"
          width={200}
          height={109}
        />
        <Image
          src="/images/logo/kraken-logo.png"
          alt="Kraken Logo"
          width={200}
          height={109}
        />
      </div>
    </section>
  );
};

export default BestSellerBrands;
