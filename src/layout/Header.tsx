import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <header className={` custom-container mx-auto h-[4.5rem]`}>
      <nav className=" flex h-full  items-center justify-between">
        <div>
          <span>CRYPTO</span>
          <span> GURU DEALS</span>
        </div>

        <ul
          className={`hidden gap-10 font-medium  ${
            router.pathname !== "/" ? "hidden" : "sm:flex"
          }`}
        >
          <li className=" cursor-pointer text-primary">Home</li>
          <li className=" cursor-pointer text-primary">Shop</li>
          <li className=" cursor-pointer text-primary">Who we are</li>
          <li className=" cursor-pointer text-primary">FAQS</li>
          <li className=" cursor-pointer text-primary">Blog</li>
          <li className=" cursor-pointer text-primary">Contact Us</li>
        </ul>
        <ul className="hidden items-center gap-3 sm:flex">
          <li className=" cursor-pointer text-primary">Login</li>
          <li className=" cursor-pointer text-primary">Sign Up</li>
        </ul>

        <div
          onClick={() => setMenu(!menu)}
          className="z-30  flex h-5 w-8 cursor-pointer flex-col items-end justify-between sm:hidden "
        >
          <span
            className={`rounded-lg bg-gray-400 p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`rounded-lg bg-gray-400 p-px  ${
              menu ? "hidden" : "w-3/4"
            }`}
          />
          <span
            className={`rounded-lg bg-gray-400 p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-3/6"
            }`}
          />
        </div>
      </nav>

      {/* Mobile View */}

      <nav
        className={` fixed  top-0  right-0 z-20 flex h-screen w-3/5  flex-col items-center gap-7 bg-gray-900 p-10 font-medium  drop-shadow-md transition-transform duration-200 ease-in-out sm:hidden ${
          menu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul
          className={`flex-col items-center gap-7 ${
            router.pathname !== "/" ? "hidden" : "flex"
          }`}
        >
          <li className="mt-20 cursor-pointer text-gray-400 hover:text-gray-100 ">
            Home
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-100 ">
            Skills
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-gray-100 ">
            Projects
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-7">
          <li
            className={`mt-2 ${
              router.pathname == "/" ? "hidden" : "mt-20 block"
            }`}
          >
            <Link
              onClick={() => setMenu(false)}
              className={` cursor-pointer text-gray-400 hover:text-gray-100 `}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mt-2">
            <a
              href="https://drive.google.com/file/d/1-O5skjAswR9owyGsUkXtym12DmC93xoq/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-gray-400 py-2 px-2 text-gray-400  transition-colors duration-200 hover:border-gray-200 hover:bg-gray-800/60 hover:text-gray-200"
            >
              Resume
            </a>
          </li>
          <li className="mt-2">
            <Link
              onClick={() => setMenu(false)}
              className="rounded border border-gray-400 py-2 px-2 text-gray-400  transition-colors duration-200 hover:border-gray-200 hover:bg-gray-800/60 hover:text-gray-200"
              href="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// aria-current="page"
