"use client";

import { useState } from "react";
import useStore from "@/app/store/store";
import type { BetType, CompetitorType, MatchType } from "@/app/types/bets";

export default function Matches({ ...match }: MatchType) {
  const { name, date, competitors, urn } = match;

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const time = dateObj.getHours() + ":" + dateObj.getMinutes();

  const [selectedBets, setSelectedBets] = useState<string[]>([]);
  const store = useStore();

  const isBetSelected = (urn: string) => {
    return selectedBets.includes(urn);
  };

  const selectBet = (competitor: CompetitorType) => {
    const { urn } = competitor;
    const matchName = match.name;

    if (isBetSelected(urn)) {
      setSelectedBets(selectedBets.filter((bet) => bet !== urn));
      store.removeBet({ matchName, competitor });
    } else {
      setSelectedBets([...selectedBets, urn]);
      store.addBet({ matchName, competitor });
    }
  };

  return (
    <div
      key={urn}
      className="flex justify-between p-2 [&:not(:last-child)]:border-b-2 border-gray-200"
    >
      <span className="self-center">{name}</span>
      <div className="flex gap-x-2">
        <div className="flex flex-col text-xs font-bold justify-center text-right">
          <span>{day + " " + month}</span>
          <span>{time}</span>
        </div>
        <div className="flex gap-x-[1px]">
          {competitors.map((competitor) => {
            const { urn, odds } = competitor;
            return (
              <button
                key={urn}
                className={
                  isBetSelected(urn) ? "bet-button--selected" : "bet-button"
                }
                onClick={() => selectBet(competitor)}
              >
                {odds}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
