import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "merelyui/dist/style.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MerelyUI",
  description: "React UI component library. Open-Source, free, customizable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
