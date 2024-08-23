"use client";

import Link from "next/link";
import { Button } from "merelyui";

import Navigation from "@/components/doc/navigation";

export default function UsePage() {
  return (
    <article className="w-full h-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl lg:text-5xl">Quick Start</h1>
      <h5>
        Once you{" "}
        <Link className="underline" href="/components/installation">
          installed MerelyUI
        </Link>
        , you can use components just by importing them.
      </h5>
      <ul className="w-full text-zinc-300 flex flex-col gap-4">
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">
            1. Instead of writing a bunch of css for making a button:
          </h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <h6 className="text-pink-500">&lt;button</h6>
            <div className="ml-4">
              <p>
                <span className="text-lime-400">className</span>=
                <span className="text-yellow-300">
                  &quot;w-fit rounded py-2 px-6 hover:text-black hover:bg-white
                  font-medium text-center text-sm text-white border border-white
                  focus:ring focus:ring-blue-500 focus:outline-none scale-100
                  active:scale-95 transition-all ease-in duration-300
                  disabled:text-zinc-400 disabled:border-zinc-300
                  disabled:shadow-none disabled:cursor-not-allowed&quot;
                </span>
              </p>
            </div>
            <span className="text-pink-500">&gt;</span>
            <h6 className="ml-4">Button</h6>
            <h6 className="text-pink-500">&lt;/Button&gt;</h6>
          </div>
          <button
            type="button"
            className="w-fit rounded py-2 px-6 hover:text-black hover:bg-white font-medium text-center text-sm text-white border border-white focus:ring focus:ring-blue-500 focus:outline-none scale-100 active:scale-95 transition-all ease-in duration-300 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
          >
            Button
          </button>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">
            2. You can just use a component class like this:
          </h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <h6 className="text-pink-500">&lt;Button&gt;</h6>
            <h6 className="ml-4">Button</h6>
            <h6 className="text-pink-500">&lt;/Button&gt;</h6>
          </div>
          <Button>Button</Button>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">
            3. Then you can modify the component with additional variants:
          </h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <h6 className="text-pink-500">&lt;Button</h6>
            <div className="ml-4 flex items-center justify-start gap-1">
              <span className="text-lime-400">rounded</span>
              <span className="text-lime-400">large</span>
              <span className="text-lime-400">fullWidth</span>
            </div>
            <span className="text-pink-500">&gt;</span>
            <h6 className="ml-4">Button</h6>
            <h6 className="text-pink-500">&lt;/Button&gt;</h6>
          </div>
          <Button rounded large fullWidth>
            Button
          </Button>
        </li>
      </ul>
      <Navigation
        prevLink="Installation"
        prevHref="/components/installation"
        nextLink="Customize Components"
        nextHref="/components/customize"
      />
    </article>
  );
}
