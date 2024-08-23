import React from "react";
import { Accordion, Clipboard } from "merelyui";

interface AccordionProps {
  title: string;
  content: React.ReactElement;
  secondary?: boolean;
}

const accordionData: Array<AccordionProps> = [
  {
    title: "Accordion Title",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum amet
        iusto saepe voluptatum molestiae deserunt rerum adipisci illum minima,
        molestias facilis debitis modi voluptates iste! Maiores deleniti
        voluptate voluptas? Incidunt.
      </p>
    ),
  },
  {
    title: "Accordion Title 2",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi corrupti quo iure repellat? Quod odio aliquid, laborum modi
        tenetur repellendus esse numquam, ullam, quo minima quis dolorem dolore
        reiciendis?
      </p>
    ),
  },
] as const;

const accordionDataSecondary: Array<AccordionProps> = [
  {
    title: "Accordion Title",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum amet
        iusto saepe voluptatum molestiae deserunt rerum adipisci illum minima,
        molestias facilis debitis modi voluptates iste! Maiores deleniti
        voluptate voluptas? Incidunt.
      </p>
    ),
    secondary: true,
  },
  {
    title: "Accordion Title 2",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi corrupti quo iure repellat? Quod odio aliquid, laborum modi
        tenetur repellendus esse numquam, ullam, quo minima quis dolorem dolore
        reiciendis?
      </p>
    ),
    secondary: true,
  },
] as const;

interface TabsProps {
  label: string;
  content: React.ReactElement;
  secondary?: boolean;
}

export const AccordionTabsData: Array<TabsProps> = [
  {
    label: "data.jsx",
    content: (
      <Clipboard content="copy">
        <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md overflow-x-auto p-4">
          <div className="w-full inline-flex items-center">
            <code className="text-pink-500">&lt;Accordion</code>
            <code className="text-lime-400 ml-2">data</code>
            <code>=</code>
            <code>{"{"}</code>
            <code className="mx-2">data</code>
            <code>{"}"}</code>
            <code className="text-pink-500">/&gt;</code>
          </div>
        </div>
      </Clipboard>
    ),
  },
  {
    label: "JSX",
    content: <Accordion data={accordionData} />,
  },
] as const;

export const AccordionTabsDataSecondary: Array<TabsProps> = [
  {
    label: "data.jsx",
    content: (
      <Clipboard content="copy">
        <div className="w-full text-white text-sm bg-bermuda-900 rounded-b-md overflow-x-auto p-4">
          <div className="w-full inline-flex items-center">
            <code className="text-pink-500">&lt;Accordion</code>
            <code className="text-lime-400 mx-2">secondary</code>
            <code className="text-lime-400">data</code>
            <code>=</code>
            <code>{"{"}</code>
            <code className="mx-2">data</code>
            <code>{"}"}</code>
            <code className="text-pink-500">/&gt;</code>
          </div>
        </div>
      </Clipboard>
    ),
  },
  {
    label: "JSX",
    content: <Accordion data={accordionDataSecondary} />,
  },
] as const;
