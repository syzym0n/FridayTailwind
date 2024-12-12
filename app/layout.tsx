import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friday Tailwind",
  description: "Each Friday, a new next and tailwind page",
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
