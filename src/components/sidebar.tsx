import React from "react";

export default function Sidebar() {
  return (
    <aside className="h-[calc(100vh-64px)] hidden lg:flex w-[324px] sticky top-16 bottom-0 left-0 shrink-0 overflow-y-auto p-8">
      <div className="w-full h-full flex flex-col justify-start items-start">
        <h1 className="font-semibold">Getting Started</h1>
        <ul className="text-gray-200 p-4 flex flex-col items-start justify-start gap-1">
          <li>Installation</li>
          <li>Use</li>
          <li>Customize Components</li>
          <li>Themes</li>
        </ul>
        <h1 className="font-semibold">Components</h1>
        <ul className="text-gray-200 p-4 flex flex-col items-start justify-start gap-1">
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
        </ul>
        <ul className="w-full border-t p-4">
          <li>GitHub</li>
          <li>Blog</li>
          <li>Support MerelyUI</li>
        </ul>
      </div>
    </aside>
  );
}
