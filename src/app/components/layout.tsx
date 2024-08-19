import Layout from "@/components/doc/layout";
import Navbar from "@/components/navbar";
import React from "react";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative mt-16">
      <Navbar />
      <Layout>{children}</Layout>
    </main>
  );
}
