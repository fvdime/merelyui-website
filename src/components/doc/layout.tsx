"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "../sidebar";
import { OTPData } from "@/data/sidebar-data";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex flex-row relative text-white">
      <Sidebar pathname={pathname} />
      <main className="w-full h-full min-h-screen p-8">{children}</main>
      {pathname !== "/components" ? (
        <aside className="h-[calc(100vh-64px)] overflow-y- bg hidden lg:flex w-[324px] sticky top-16 bottom-0 right-0 shrink-0 overflow-y-hidden p-8">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <h1 className="font-semibold">On This Page</h1>
            <ul className="text-gray-200 p-4 flex flex-col items-start justify-start gap-1">
              {OTPData.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="hover:text-white text-sm inline-flex justify-center items-center gap-2"
                >
                  <span className="p-1 rounded-full bg-gray-200"/>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
