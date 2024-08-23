"use client";

import Link from "next/link";
import { Tabs, Clipboard } from "merelyui";

import Navigation from "@/components/doc/navigation";
import { ColorData } from "@/data/theme";
import { AccordionData } from "@/data/component-data";
import { AccordionTabsData, AccordionTabsDataSecondary } from "@/data/data";

export default function AccordionPage() {
  return (
    <article className="w-full h-full flex flex-col gap-4">
      <h1 className="font-bold text-4xl lg:text-5xl">Accordion</h1>
      <h5>
        Accordion component for showing and hiding content with only one item
        open at a time. It toggles between collapsed and expanded states.
      </h5>
      <ul className="w-full flex flex-col gap-12">
        <li className="w-full h-full">
          <div className="relative w-full">
            <table className="w-full text-sm text-left text-zinc-100 font-light">
              <thead className="uppercase border-b border-dashed border-bermuda-100">
                <tr>
                  <th scope="col" className="px-6 py-2.5">
                    Prop
                  </th>
                  <th scope="col" className="px-6 py-2.5">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {AccordionData.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-dashed border-bermuda-100"
                  >
                    <th
                      scope="row"
                      className="px-6 py-2.5 font-light whitespace-nowrap"
                    >
                      {item.title}{" "}
                      <span
                        className={`${
                          item.required ? "visible" : "hidden"
                        } text-pink-500 -ml-1`}
                      >
                        *
                      </span>
                    </th>
                    <td className="px-6 py-2.5 text-zinc-300">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            1. Add your data
          </h4>
          <p className="text-sm text-zinc-300">
            First, create your data. In the below, I’ve provided an example
            data.
          </p>
          <Clipboard content="copy">
            <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md overflow-x-auto p-4">
              <div className="w-full inline-flex items-center">
                <code className="text-pink-500">const</code>
                <code className="text-lime-400 mx-2">data</code>
                <code className="mr-2">=</code>
                <code>{"["}</code>
              </div>
              <code>{"{"}</code>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-pink-500">title</code>
                <code>:</code>
                <code className="text-lime-400 ml-2">
                  &apos;Accordion Title&apos;
                </code>
                <code>,</code>
              </div>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-pink-500">content</code>
                <code>:</code>
                <code className="ml-2">{"("}</code>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center ml-8">
                <code className="text-pink-500">&lt;p&gt;</code>
                <code>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                  officia blanditiis? Quidem molestias praesentium quibusdam
                  quis cupiditate laborum, consequatur nulla illo error ratione
                  autem voluptatibus placeat iusto ullam velit obcaecati.
                </code>
                <code className="text-pink-500">&lt;/p&gt;</code>
                <code className="">{")"}</code>
              </div>
              <code className="p-4">{"},"}</code>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-pink-500">title</code>
                <code>:</code>
                <code className="text-lime-400 ml-2">
                  &apos;Accordion Title 2&apos;
                </code>
                <code>,</code>
              </div>
              <div className="w-full inline-flex items-center ml-4">
                <code className="text-pink-500">content</code>
                <code>:</code>
                <code className="ml-2">{"("}</code>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center ml-8">
                <code className="text-pink-500">&lt;p&gt;</code>
                <code>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                  officia blanditiis? Quidem molestias praesentium quibusdam
                  quis cupiditate laborum, consequatur nulla illo error ratione
                  autem voluptatibus placeat iusto ullam velit obcaecati.
                </code>
                <code className="text-pink-500">&lt;/p&gt;</code>
                <code className="">{")"}</code>
              </div>
              <div className="flex flex-col items-start justify-center">
                <code>{"]"}</code>
              </div>
            </div>
          </Clipboard>
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            Default Accordion
          </h4>
          <Tabs data={AccordionTabsData} />
        </li>
        <li className="w-full flex flex-col items-start justify-center gap-4">
          <h4 className="text-lg font-medium tracking-tight">
            Secondary Accordion
          </h4>
          <p className="text-sm text-zinc-300">
            Accordion without the buttons.
          </p>
          <Tabs data={AccordionTabsDataSecondary} />
        </li>
      </ul>
      <Navigation
        prevLink="Components"
        prevHref="/components"
        nextLink="Alert"
        nextHref="/alert"
      />
    </article>
  );
}
