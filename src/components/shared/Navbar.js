"use client";
import Link from "next/link";
import "./style.css";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
const Navbar = () => {
  const menuItem = [
    "Proccesso",
    "MotherBoard",
    "Mouse",
    "keyBoard",
    "Cooling Fan",
    "Scanner",
    "Hard Drive",
    "printer",
    "Monitor",
    "Power Supply",
    "RAM",
    "Casing",
  ];
  const { data, status } = useSession();

  return (
    <div className="navbar bg-gray-900 text-white shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">NewTech</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0} className="dropdownn">
            <button className="dropbtn">Categoris</button>
            <div className="dropdownn-content">
              <a href="#home">Link1</a>
              <a href="#home">Link2</a>
              <a href="#home">Link3</a>
              <a href="#home">Link4</a>
            </div>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/protected/pcBuilder">
         
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-2">
            PC Builder
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default Navbar;
