import React, { Suspense } from "react";
import Header from "./containers/Header/Header";
import HeaderSkeleton from "./components/Header/Skeleton";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <div className="flex flex-row items-start justify-center w-full overflow-y-auto">
        <div className="flex flex-start w-full">
          <aside className="bg-black flex w-1/5 min-h-screen"></aside>

          <main className="w-11/20"></main>

          <aside className="bg-black flex w-1/4 min-h-screen"></aside>
        </div>
      </div>
    </div>
  );
}
