"use client";

import { useState } from "react";
import Image from "next/image";
import useStore from "@/app/store/store";
import type { BetType } from "@/app/store/store.types";

const BetslipBet = ({ matchName, competitor }: BetType) => {
  const { urn, name, odds } = competitor;

  const removeBet = useStore((state) => state.removeBetFromBetslip);
  const [stake, setStake] = useState("");

  return (
    <div
      key={urn}
      className="flex flex-col bg-green-700 p-2 text-white rounded-md gap-y-4"
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span>{matchName}</span>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => removeBet({ matchName, competitor })}
        >
          <Image src="/icons/bin.svg" alt="Remove bet" width={20} height={20} />
        </button>
      </div>

      <div className="flex gap-x-2">
        <div className="flex flex-col bg-white rounded-md w-full h-full text-center text-black p-1 border-3 border-white">
          <span className="capitalize text-sm">Odds</span>
          <span aria-label="Odds" className="font-bold">
            {odds}
          </span>
        </div>
        <div className="flex flex-col bg-gray-200 rounded-md w-full text-center text-black p-1 border-3 border-solid border-amber-400">
          <span className="capitalize text-sm">Stake</span>
          <div className="flex justify-center">
            <Image
              src="/icons/currency-euro.svg"
              alt="Euro currency"
              width={20}
              height={20}
            />
            <input
              autoFocus
              onChange={(e) => setStake(e.currentTarget.value)}
              aria-label="Stake"
              type="text"
              className="w-7 h-full rounded-md outline-none"
            />
          </div>
        </div>
      </div>

      <button
        disabled={!stake}
        className="w-full h-[40px] bg-green-100 rounded-md font-bold text-black disabled:bg-gray-200 disabled:text-gray-500"
      >
        {stake ? "Place bet!" : "Please enter stake"}
      </button>
    </div>
  );
};

export default BetslipBet;
