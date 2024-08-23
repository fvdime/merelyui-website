"use client";

import Link from "next/link";
import { Button, Clipboard } from "merelyui";

import Navigation from "@/components/doc/navigation";
import { ColorData, ThemeData } from "@/data/theme";

export default function ThemePage() {
  return (
    <article className="w-full h-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl lg:text-5xl">Themes</h1>
      <h5>
        MerelyUI comes with basic themes so it is natural that you want to
        improve it based on your taste. Bu before theming you should make sure
        install{" "}
        <Link
          target="_blank"
          className="text-blue-500 underline"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Link>
        . MerelyUI includes a default theme by default.
      </h5>
      <ul className="w-full flex flex-col gap-4">
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            List of themes:
          </h4>
          <div className="grid grid-cols-3 gap-4 w-full h-24">
            <div className="bg-bermuda-800 rounded"></div>
            <div className="bg-bermuda-800 rounded"></div>
            <div className="bg-bermuda-800 rounded"></div>
          </div>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-4">
            <div className="w-full inline-flex items-center">
              <code className="text-pink-500">&lt;Button</code>
              <code className="text-lime-400 ml-2">theme</code>
              <code className="text-lime-400">=</code>
              <code className="text-yellow-400">&quot;theme-nova&quot;</code>
              <code className="text-pink-500">&gt;</code>
              <span>Button</span>
              <code className="text-pink-500">&lt;/Button&gt;</code>
            </div>
          </div>
          <Button theme="theme-nova">Button</Button>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            How to create your own theme?
          </h4>
          <p className="text-sm text-zinc-300">
            First, create your theme using the names provided below. You can add
            a new theme directly in your global CSS file. In the following
            example, I’ve added a theme called theme-custom with the colors I
            prefer.
          </p>
          <Clipboard content="copy" title="global.css">
            <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md p-4">
              <div className="w-full inline-flex items-center">
                <code className="text-pink-500">@layer</code>
                <code className="text-lime-400 mx-2">base</code>
                <code>{"{"}</code>
              </div>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-lime-400 mx-2">.theme-custom</code>
                <code>{"{"}</code>
              </div>
              {ThemeData.map((theme, i) => (
                <div key={i} className="w-full inline-flex items-center ml-12">
                  <code className="text-pink-500">{theme.title}</code>
                  <code>:</code>
                  <code className="text-yellow-500 ml-2">{theme.rgb}</code>
                  <code>;</code>
                </div>
              ))}
              <div className="flex flex-col items-start justify-center">
                <code className="ml-8">{"}"}</code>
                <code className="ml-4">{"}"}</code>
              </div>
            </div>
          </Clipboard>
          <p className="text-sm text-zinc-300">
            Next, create a function for handling opacity in your
            tailwind.config.js file. For more details on theming Tailwind with
            CSS variables, check out the link provided!
            <Link
              target="_blank"
              className="text-sm text-blue-500 underline ml-1.5"
              href="https://www.youtube.com/watch?v=MAtaT8BZEAo&t=8s&pp=ygUUdGFpbHdpbmQgY3NzIHRoZW1pbmc%3D"
            >
              Theming Tailwind with CSS Variables
            </Link>
          </p>
          <Clipboard content="copy" title="tailwind.config.js">
            <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md overflow-x-scroll p-4">
              <div className="w-full inline-flex items-center">
                <code className="text-pink-500">function</code>
                <code className="ml-2 text-lime-500">withOpacity</code>
                <code>{"("}</code>
                <code className="text-yellow-500">variableName</code>
                <code>{")"}</code>
                <code className="ml-2">{"{"}</code>
              </div>
              <div className="w-full ml-4 inline-flex items-center">
                <code className="text-pink-500">return</code>
                <code>{"({"}</code>
                <code className="text-yellow-500">opacityValue</code>
                <code>{"})"}</code>
                <code className="mx-2">=&gt;</code>
                <code>{"{"}</code>
              </div>
              <div className="w-full ml-8 inline-flex items-center">
                <code className="text-pink-500">if</code>
                <code className="ml-2">{"("}</code>
                <code>opacityValue</code>
                <code className="mx-2">!==</code>
                <code className="text-lime-500">undefined</code>

                <code className="mr-2">{")"}</code>
                <code>{"{"}</code>
              </div>
              <div className="w-full ml-12 inline-flex items-center">
                <code className="text-pink-500">return</code>
                <code className="ml-2 text-yellow-500">{"`"}</code>
                <code className="text-yellow-500">
                  rgba{"("}var{"("}
                </code>
                <code>
                  {"${"}variableName{"}"}
                </code>
                <code className="mr-2 text-yellow-500">,</code>
                <code>
                  {"${"}opacityValue{"}"}
                </code>
                <code className="text-yellow-500">{")"}</code>
                <code className="text-yellow-500">{"`"}</code>
              </div>
              <div className="flex flex-col items-start justify-center">
                <code className="ml-8">{"}"}</code>
                <div className="w-full ml-12 inline-flex items-center">
                  <code className="text-pink-500">return</code>
                  <code className="ml-2 text-yellow-500">{"`"}</code>
                  <code className="text-yellow-500">
                    rgb{"("}var{"("}
                  </code>
                  <code>
                    {"${"}variableName{"}"}
                  </code>
                  <code className="text-yellow-500">{")"}</code>
                  <code className="text-yellow-500">{"`"}</code>
                </div>
                <code className="ml-4">{"}"}</code>
                <code>{"}"}</code>
              </div>
            </div>
          </Clipboard>
          <p className="text-sm text-zinc-300">
            Last but not least, extend the theme in your tailwind.config.js
            file.
          </p>
          <Clipboard content="copy" title="tailwind.config.js">
            <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md overflow-x-scroll p-4">
              <div className="w-full inline-flex items-center">
                <code className="text-pink-500">theme</code>
                <code className="mr-2">:</code>
                <code>{"{"}</code>
              </div>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-pink-500">extend</code>
                <code className="mr-2">:</code>
                <code>{"{"}</code>
              </div>
              {ColorData.map((color, i) => (
                <div key={i}>
                  <div className="w-full inline-flex items-center ml-12">
                    <code className="text-pink-500">{color.title}</code>
                    <code className="mr-2">:</code>
                    <code>{"{"}</code>
                  </div>
                  {color.color.map((item, i) => (
                    <div
                      key={i}
                      className="w-full inline-flex items-center ml-20"
                    >
                      <code className="text-pink-500">{item.title}</code>
                      <code>:</code>
                      <code className="text-lime-500 ml-2">withOpacity</code>
                      <code>{"("}</code>
                      <code className="text-yellow-500">{item.rgb}</code>
                      <code>{")"}</code>
                      <code>;</code>
                    </div>
                  ))}
                  <code className="ml-12">{"},"}</code>
                </div>
              ))}
              <div className="flex flex-col items-start justify-center">
                <code className="ml-8">{"},"}</code>
                <code className="ml-4">{"}"}</code>
              </div>
            </div>
          </Clipboard>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            How to use different themes for different components?
          </h4>
          <p className="text-sm text-zinc-300">
            Add theme=&apos;theme-name&apos; to any component, and everything
            inside will automatically use your theme. You can even nest themes
            with no limitations!
          </p>
          <div className="w-full text-white text-sm bg-bermuda-900 rounded p-4">
            <div className="w-full inline-flex items-center">
              <code className="text-pink-500">&lt;Input</code>
              <code className="text-pink-500">&gt;</code>
              <h6>This input will use MerelyUI default theme!</h6>
              <code className="text-pink-500">&lt;/Input&gt;</code>
            </div>
            <div className="w-full inline-flex items-center">
              <code className="text-pink-500">&lt;Button</code>
              <code className="text-lime-400 ml-2">theme</code>
              <code className="text-lime-400">=</code>
              <code className="text-yellow-400">&quot;theme-custom&quot;</code>
              <code className="text-pink-500">&gt;</code>
              <span>This button will use custom theme!</span>
              <code className="text-pink-500">&lt;/Button&gt;</code>
            </div>
          </div>
        </li>
      </ul>
      <Navigation
        prevLink="Customize Components"
        prevHref="/components/customize"
        nextLink="Components"
        nextHref="/components"
      />
    </article>
  );
}
