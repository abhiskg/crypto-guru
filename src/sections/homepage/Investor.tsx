import Image from "next/image";

const Investor = () => {
  return (
    <div className="custom-container mx-auto flex flex-col items-center justify-around gap-5 py-16 md:flex-row md:gap-0">
      <div className="text-center text-3xl font-semibold xs:text-4xl sm:text-5xl md:max-w-md md:text-left lg:max-w-xl lg:text-6xl">
        Built by{" "}
        <span className="bg-gradient-to-r from-btn-primary to-btn-secondary bg-clip-text text-transparent ">
          experts
        </span>{" "}
        and backed by investors
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-5">
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
    </div>
  );
};

export default Investor;
