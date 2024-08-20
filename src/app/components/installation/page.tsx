"use client";

import Link from "next/link";
import { Clipboard } from "merelyui";

import Navigation from "@/components/doc/navigation";

export default function InstallationPage() {
  return (
    <article className="w-full h-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl lg:text-5xl">Installation</h1>
      <p>
        Install MerelyUI, React and Tailwind CSS UI component library.
        Open-Source, free, customizable.
      </p>
      <div className="border-bermuda-100 text-zinc-300 flex flex-col gap-2.5">
        <h4
          id="#default-installation"
          className="text-white text-lg font-medium scroll-m-8"
        >
          Default Installation
        </h4>
        <Clipboard terminal content="npm install merelyui">
          <span className="text-white text-sm inline-flex gap-1.5 bg-bermuda-900 rounded-b p-4 w-full">
            <p className="text-yellow-400">npm</p> install merelyui
          </span>
        </Clipboard>
      </div>
      <div className="border-bermuda-100 text-zinc-200 flex flex-col gap-2.5">
        <h4
          id="#dependencies"
          className="text-white text-lg font-medium scroll-m-8"
        >
          Dependencies
        </h4>
        <h6 className="text-sm text-zinc-50">
          <Link
            target="_blank"
            className="text-blue-500 underline"
            href="https://react.dev/"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            className="text-blue-500 underline"
            href="https://legacy.reactjs.org/docs/react-dom.html"
          >
            react-dom
          </Link>{" "}
          are peer dependencies. And{" "}
          <Link
            target="_blank"
            className="text-blue-500 underline"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </Link>{" "}
          is a dev dependency, please make sure you have them installed before
          installing MerelyUI.
        </h6>
        <Clipboard
          title="package.json"
          content={`
          "peerDependencies": {
              "react": "^17.0.0 || ^18.0.0",
              "react-dom": "^17.0.0 || ^18.0.0"
            },
            "devDependencies": {
                "tailwindcss": "^3.4.1",
            }
          `}
        >
          <div className="text-white text-sm bg-bermuda-900 rounded-b p-4">
            <h6 className="text-pink-500">
              &quot;peerDependencies&quot;{" "}
              <span className="text-white">: {`{`}</span>
            </h6>
            <div className="ml-4">
              <p>
                <span className="text-pink-500">&quot;react&quot;</span> :{" "}
                <span className="text-lime-500">
                  &quot;^17.0.0 || ^18.0.0&quot;
                </span>
                ,
              </p>
              <p>
                <span className="text-pink-500">&quot;react-dom&quot;</span> :{" "}
                <span className="text-lime-500">
                  &quot;^17.0.0 || ^18.0.0&quot;
                </span>
              </p>
            </div>
            <span>{`}`},</span>
            <h6 className="text-pink-500">
              &quot;devDependencies&quot;{" "}
              <span className="text-white">: {`{`}</span>
            </h6>
            <div className="ml-4">
              <p>
                <span className="text-pink-500">&quot;tailwindcss&quot;</span> :{" "}
                <span className="text-lime-500">&quot;^3.4.1&quot;</span>
              </p>
            </div>
            <span>{`}`}</span>
          </div>
        </Clipboard>
      </div>
      <Navigation nextLink="Use" nextHref="/components/use" />
    </article>
  );
}
