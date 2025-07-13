import { Suspense, lazy } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Betslip from "./components/Betslip/Betslip";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen bg-gray-200">
          <Header />
          <div className="flex flex-row items-start justify-center w-full overflow-y-auto px-40">
            <div className="flex flex-start w-full mx-3 my-6">
              <aside className="flex w-1/5 min-h-screen">
                <Menu />
              </aside>

              <main className="w-11/20 rounded-md mx-6">{children}</main>

              <Betslip />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
