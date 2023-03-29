import Image from "next/image";

const Investor = () => {
  return (
    <div className="custom-container mx-auto flex items-center justify-between py-28">
      <div className="max-w-xl text-7xl font-semibold">
        Built by <span>experts</span> and backed by investors
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <Image
          src="/images/logo/binance-logo.png"
          alt="Binance Logo"
          width={300}
          height={109}
        />
        <Image
          src="/images/logo/bitfinex-logo.png"
          alt="Bitfinex Logo"
          width={300}
          height={109}
        />
        <Image
          src="/images/logo/choincheck-logo.png"
          alt="Choincheck Logo"
          width={300}
          height={109}
        />
        <Image
          src="/images/logo/kraken-logo.png"
          alt="Kraken Logo"
          width={300}
          height={109}
        />
      </div>
    </div>
  );
};

export default Investor;
