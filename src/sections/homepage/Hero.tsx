import { Button } from "~/components/buttons/Button";

function Hero() {
  return (
    <section className="bg-bgPrimary">
      <div className="custom-container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-5xl font-bold leading-none text-primary sm:text-7xl">
            Start
            <span className="text-gra">Mining</span>Today!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Operated by a team of professionals with an experience into
            Blockchain Management, E-Commerce and Cryptocurrency Mining.
          </p>
          <Button title="Buy Miners" />
        </div>
        <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
          <img
            src="assets/svg/Business_SVG.svg"
            alt=""
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
