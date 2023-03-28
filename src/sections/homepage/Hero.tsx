import React from "react";

function Hero() {
  return (
    <section className="bg-bgPrimary">
      <div className="custom-container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Ac mattis
            <span className="dark:text-violet-400">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded px-8 py-3 text-lg font-semibold dark:bg-violet-400 dark:text-gray-900"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="rounded border px-8 py-3 text-lg font-semibold dark:border-gray-100"
            >
              Malesuada
            </a>
          </div>
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
