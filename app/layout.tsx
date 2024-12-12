import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friday Tailwind",
  description: "Each Friday, a new next and tailwind page",
};

import MainHeader from "@/components/beneRohlmann/mainHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-dvw h-dvh overflow-hidden" lang="en">
      <body className="bg-primary text-secondary font-righteous px-12 py-16">
      <MainHeader />
        {children}
      </body>
    </html>
  );
}
