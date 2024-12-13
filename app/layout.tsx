import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friday Tailwind",
  description: "Each Friday, a new next and tailwind page",
};

import MainHeader from "@/components/beneRohlmann/mainHeader";
import TextBG from "@/components/beneRohlmann/textBG";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-dvw h-dvh relative bg-primary text-secondary font-righteous px-12 py-16 overflow-hidden
      flex flex-col items-center gap-10">
      <MainHeader />
      <TextBG />
        {children}
      </body>
    </html>
  );
}
