import Image from "next/image";

const HostingPartner = () => {
  return (
    <div className="bg-bgPrimary py-20">
      <h2 className="text-center text-3xl font-semibold">HOSTING PARTNER</h2>
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

      <div className="custom-container mx-auto mt-7 flex items-center justify-center gap-10">
        <Image
          src="/images/hosting-partner.png"
          alt="Bitfinex Logo"
          width={516}
          height={460}
        />
        <div className="max-w-md">
          <h3 className="text-5xl font-extrabold">
            <div className="text-btn-secondary">CRYPTO</div>
            <div className="text-primary"> GURU DEALS</div>
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostingPartner;
