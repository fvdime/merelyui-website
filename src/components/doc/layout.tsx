import React from "react";
import { Link } from "merelyui";
import Sidebar from "../sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row relative text-white">
      <Sidebar/>
      <main className="w-full min-h-screen p-8">{children}</main>
      <aside className="h-[calc(100vh-64px)] overflow-y- bg hidden lg:flex w-[324px] sticky top-16 bottom-0 right-0 shrink-0 overflow-y-hidden p-8">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h1 className="font-semibold ">On This Page</h1>
          <ul className="text-gray-200 p-4 flex flex-col items-start justify-start gap-1">
            <li className="border-l pl-4">Installation</li>
            <li className="pl-4">Use</li>
            <li className="pl-4">Customize Components</li>
            <li className="pl-4">Themes</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
