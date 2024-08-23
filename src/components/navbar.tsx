"use client";

import React from "react";
import { Kbd, Link } from "merelyui";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-black/50 backdrop-blur border-b border-bermuda-700 fixed top-0 left-0 right-0 text-white z-50 flex flex-col justify-center">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row justify-between items-center px-4 md:px-0">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <button className="visible lg:hidden">
            <svg className="w-5 h-5 text-gray-100"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>
          {/* LOGO IMG */}
          <a href="/" className="font-semibold text-xl">
            MerelyUI
          </a>
        </div>
        <>
          <button
            type="button"
            className="w-fit lg:w-2/3 flex flex-row justify-between items-center scale-100 bg-transparent hover:bg-bermuda-700 py-2 lg:py-1 px-2 rounded active:scale-95 transition-transform ease-in-out duration-700"
          >
            <span className="sr-only">Open search modal</span>
            <div className="flex flex-row items-center justify-start gap-4">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="text-sm rounded-lg bg-transparent text-gray-400 focus:ring-blue-500  focus:border-blue-500 hidden lg:flex">
                Search Components...
              </span>
            </div>
            <span className="hidden lg:flex border-gray-500 text-gray-400">
              <Kbd>CtrlK</Kbd>
            </span>
          </button>
        </>
        <div className="w-full hidden md:flex flex-row justify-end items-center gap-2 text-white">
          {/* <Link href="/" label="Components" small/>
          <Link href="/" label="Templates" small/> */}
        </div>
      </div>
    </header>
  );
}
