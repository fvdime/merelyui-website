import React from "react";
import { sidebarData } from "@/data/sidebar-data";
import Link from "next/link";

export default function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="h-[calc(100vh-64px)] hidden lg:flex w-[324px] sticky top-16 bottom-0 left-0 shrink-0 overflow-y-auto p-8">
      <div className="w-full h-full flex flex-col justify-start items-start">
        {sidebarData.map((item, i) => (
          <React.Fragment key={i}>
            <h1 className="font-semibold">{item.title}</h1>
            <div className="py-4 flex flex-col items-start justify-start gap-0.5 w-full">
              {item.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`
                    w-full hover:bg-bermuda-800 pl-4 py-1.5 rounded transition-all ease-in-out duration-500 text-sm
                    ${
                      pathname === link.href ? "text-blue-500" : "text-gray-200"
                    }
                    `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </React.Fragment>
        ))}
        {/* <div className="text-gray-200 p-4 flex flex-col items-start justify-start gap-1 border-t w-full">
          <Link href="https://github.com/fvdime/merelyui"  className="w-full hover:bg-bermuda-800 py-1.5 rounded transition-all ease-in-out duration-500">Github</Link>
          <Link href="dfs"  className="w-full hover:bg-bermuda-800 py-1.5 rounded transition-all ease-in-out duration-500">Blog</Link>
          <Link href="dfs"  className="w-full hover:bg-bermuda-800 py-1.5 rounded transition-all ease-in-out duration-500">Support MerelyUI</Link>
        </div> */}
      </div>
    </aside>
  );
}
