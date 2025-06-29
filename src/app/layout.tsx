import { Suspense, lazy } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HeaderSkeleton from "./components/Header/Skeleton";
import Betslip from "./components/Betslip/Betslip";

const Header = lazy(() => import("./containers/Header/Header"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
          <Suspense fallback={<HeaderSkeleton />}>
            <Header />
          </Suspense>
          <div className="flex flex-row items-start justify-center w-full overflow-y-auto px-40">
            <div className="flex flex-start w-full mx-3 my-6">
              <aside className="flex w-1/5 min-h-screen"></aside>

              <main className="w-11/20 rounded-md mx-6">{children}</main>

              <Betslip />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
