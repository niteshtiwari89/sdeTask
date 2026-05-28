import React from "react";

export default function Navbar({ className = "" }) {
  return (
    <header
      className={`w-full flex justify-center items-center gap-2 mx-2 px-6 py-6 ${className}`}
    >
      <div className="w-full flex items-center justify-center">
        <div className=" top-nav-container w-1/2 flex items-center justify-between gap-6 ">
          <div className="text-lg font-bold text-white font-chivo">N7</div>
          <nav className="hidden md:flex gap-8 text-sm font-chivo text-slate-300  ">
            <div className="hover:underline cursor-pointer">SOLUTIONS</div>
            <div className="hover:underline cursor-pointer">RESOURCES</div>
            <div className="hover:underline cursor-pointer">ABOUT US</div>
          </nav>
          <div className=" hidden md:block">
            <button className="px-4 py-2 border border-slate-400 rounded-md w-full text-sm font-chivo">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
