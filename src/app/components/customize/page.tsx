"use client";

import Link from "next/link";
import { Button } from "merelyui";

import Navigation from "@/components/doc/navigation";

export default function UsePage() {
  return (
    <article className="w-full h-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl lg:text-5xl">Customize Components</h1>
      <h5>
        You can customize colors, fonts, sizes, and other styles beyond the
        default utility classes from MerelyUI and Tailwind CSS. While MerelyUI
        components offer many design system variants, customization is still an
        option if needed.
      </h5>
      <ul className="w-full text-zinc-300 flex flex-col gap-4">
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">1. Let&apos;s say you added this button:</h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <div className="w-full inline-flex items-center">
              <h6 className="text-pink-500">&lt;Button</h6>
              <span className="text-pink-500">&gt;</span>
              <h6>Button</h6>
              <h6 className="text-pink-500">&lt;/Button&gt;</h6>
            </div>
          </div>
          <Button>Button</Button>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">2. You can use MerelyUI properties:</h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <div className="w-full inline-flex items-center">
              <h6 className="text-pink-500">&lt;Button</h6>
              <h6 className="text-lime-400 ml-2">rounded</h6>
              <span className="text-pink-500">&gt;</span>
              <h6>Button</h6>
              <h6 className="text-pink-500">&lt;/Button&gt;</h6>
            </div>
            <div className="w-full inline-flex items-center">
              <h6 className="text-pink-500">&lt;Button</h6>
              <h6 className="text-lime-400 ml-2">small</h6>
              <span className="text-pink-500">&gt;</span>
              <h6>Button</h6>
              <h6 className="text-pink-500">&lt;/Button&gt;</h6>
            </div>
            <div className="inline-flex items-center">
              <h6 className="text-pink-500">&lt;Button</h6>
              <h6 className="text-lime-400 ml-2">disabled</h6>
              <span className="text-pink-500">&gt;</span>
              <h6>Button</h6>
              <h6 className="text-pink-500">&lt;/Button&gt;</h6>
            </div>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-4">
            <Button small>Button</Button>
            <Button rounded>Button</Button>
            <Button disabled>Button</Button>
          </div>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h6 className="text-sm">
            3. Then you can modify the colors by parent tags. Colors and themes
            are under construction now so please wait for it!
          </h6>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-8">
            <div className="w-full inline-flex gap-2">
              <h6 className="text-pink-500">&lt;div</h6>
              <p>
                <span className="text-lime-400">className</span>=
                <span className="text-yellow-300">
                  &quot;border-pink-500 text-pink-100&quot;
                </span>
                <span className="text-pink-500">&gt;</span>
              </p>
            </div>
            <div className="w-full inline-flex items-center ml-4">
              <h6 className="text-pink-500">&lt;Button</h6>
              <span className="text-pink-500">&gt;</span>
              <h6>Button</h6>
              <h6 className="text-pink-500">&lt;/Button&gt;</h6>
            </div>
            <h6 className="text-pink-500">&lt;/div&gt;</h6>
          </div>
          <div className="border-pink-500 text-pink-100">
            <Button>Button</Button>
          </div>
        </li>
      </ul>
      <Navigation
        prevLink="Quick Start"
        prevHref="/components/quickstart"
        nextLink="Components"
        nextHref="/components"
      />
    </article>
  );
}
