const Contact = () => {
  return (
    <section className="bg-bgPrimary py-16">
      <div className="custom-container mx-auto">
        <h1 className="text-center text-3xl font-semibold">
          GET IN TOUCH WITH US
        </h1>

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

        {/* Main Section */}
        <div className=" mt-10 flex items-center justify-center gap-16">
          {/* Form */}
          <div className="relative z-20  w-full max-w-md space-y-3 ">
            <div className="rounded-xl bg-white p-8  shadow">
              <h3 className="  text-xl font-semibold">
                Tell us about your inquiry and we&apos;ll get back to you
                shortly.
              </h3>
              <form
                action=""
                className="ng-untouched ng-pristine ng-valid mt-2 space-y-4"
              >
                <div className="space-y-1 ">
                  <label
                    htmlFor="username"
                    className="block font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
                  >
                    Complete Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Complete Name"
                    className="w-full rounded-md border border-gray-400 px-4 py-2 "
                  />
                </div>
                <div className="space-y-1 ">
                  <label
                    htmlFor="email"
                    className="block font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-gray-400 px-4 py-2 "
                  />
                </div>
                <div>
                  <label>
                    <span className="mb-1 block font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                      Message
                    </span>
                    <textarea
                      className={`  w-full rounded-md border border-gray-400 px-3 pt-2 pb-10 `}
                      required
                      placeholder="Enter your message"
                      name="message"
                    ></textarea>
                  </label>
                </div>
                <button
                  type="button"
                  className={`mt-5 w-full rounded-3xl bg-btn-primary py-2 text-center font-medium hover:bg-btn-primary`}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Layer */}
            <div className="absolute -top-20 -left-20 -z-20 ">
              <svg
                width="400"
                height="400"
                viewBox="0 0 514 514"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="257"
                  cy="260.5"
                  rx="230"
                  ry="229.5"
                  fill="#FFD33F"
                  fillOpacity="0.24"
                />
                <circle
                  cx="257"
                  cy="257"
                  r="257"
                  fill="#FFD33F"
                  fillOpacity="0.19"
                />
                <ellipse
                  cx="262"
                  cy="260"
                  rx="175"
                  ry="174"
                  fill="#FFD33F"
                  fillOpacity="0.29"
                />
              </svg>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            {/* Email Section */}
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block text-btn-secondary"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="3 9 12 15 21 9 12 3 3 9" />
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                  <line x1="3" y1="19" x2="9" y2="13" />
                  <line x1="15" y1="13" x2="21" y2="19" />
                </svg>
                <span className="block text-lg font-semibold">Email us</span>
              </div>
              <div className="ml-8">deficoincapital@gmail.com</div>
              <div className="my-5 h-px w-80 bg-gray-300" />
            </div>

            {/* Chat */}
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="block text-btn-secondary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="13" rx="2" width="4" height="6" />
                  <rect x="16" y="13" rx="2" width="4" height="6" />
                  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  <path d="M18 19a6 3 0 0 1 -6 3" />
                </svg>
                <span className="block text-lg font-semibold">
                  Chat with an agent
                </span>
              </div>
              <div className="ml-8">Lorem ipsum dolor sit amet</div>
              <div className="my-5 h-px w-80 bg-gray-300" />
            </div>

            {/* Whatsapp Sec */}
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block text-btn-secondary"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="block text-lg font-semibold">WhatsApp</span>
              </div>
              <div className="ml-8">Lorem ipsum dolor sit amet</div>
              <div className="my-5 h-px w-80 bg-gray-300" />
            </div>

            {/* gg */}
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block text-btn-secondary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="block text-lg font-semibold">Call us</span>
              </div>
              <div className="ml-8">+86-13530796464 </div>
              <div className="my-5 h-px w-80 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
