"use client";
import Link from "next/link";
import { useState } from "react";

 const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-green-400 p-3 ">
      <Link href="/" className="inline-flex items-center p-2 mr-4 ">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-white h-8 w-8 mr-2"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          TSDetails
        </span>
      </Link>
      <button
        type="button"
        className=" inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {active ?  (
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
            />
          ) :(
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full md:inline-flex md:flex-grow md:w-auto`}
      >
        <div className="md:inline-flex md:flex-row ml-0 md:ml-24  md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
          <Link
            href="/"
            className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white "
          >
            Teachers
          </Link>
          <Link
            href="/students"
            className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
          >
            Students
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar