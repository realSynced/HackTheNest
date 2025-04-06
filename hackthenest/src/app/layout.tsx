import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
  title: "Safe Harbor - Immigration Support",
  description:
    "Safe Harbor - Support for refugees and immigrants navigating the deportation process. Access resources, prepare for interviews, and find guidance during challenging times.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f3f3ff]`}>
        <main className={``}>{children}</main>
      </body>
    </html>
  );
}
