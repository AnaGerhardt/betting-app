"use client";

import useStore from "@/app/store/store";
import type { BetType, CompetitorType } from "@/app/types/bets";

const BetButton = ({ matchName, competitor }: BetType) => {
  const { urn, odds } = competitor;

  const store = useStore();

  const isBetSelected = (urn: string) => {
    return !!store.bets.find((b) => b.competitor.urn === urn);
  };

  const selectBet = (competitor: CompetitorType) => {
    if (isBetSelected(urn)) {
      store.removeBet({ matchName, competitor });
    } else {
      store.addBet({ matchName, competitor });
    }
  };

  return (
    <button
      key={urn}
      className={isBetSelected(urn) ? "bet-button--selected" : "bet-button"}
      onClick={() => selectBet(competitor)}
    >
      {odds}
    </button>
  );
};

export default BetButton;
