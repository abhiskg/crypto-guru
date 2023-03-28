import Image from "next/image";

export const Hosting = () => {
  return (
    <div className="bg-bgPrimary py-20">
      <h2 className="text-center text-2xl font-semibold">HOSTING PARTNER</h2>
      <div className="custom-container mx-auto flex items-center gap-10">
        <Image
          src="/images/hosting-partner.png"
          alt="Bitfinex Logo"
          width={716}
          height={560}
        />
        <div>
          <h3>CRYPTO GURU DEALS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
    </div>
  );
};
