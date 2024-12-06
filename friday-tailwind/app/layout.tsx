import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friday Tailwind",
  description: "Application de pratique sur Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
