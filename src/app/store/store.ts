import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BetType } from "./store.types";

interface StoreState {
  betslipBets: BetType[];
  addBetToBetslip: (bet: BetType) => void;
  removeBetFromBetslip: (bet: BetType) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      betslipBets: [],
      addBetToBetslip: (bet) =>
        set((state) => ({ betslipBets: [...state.betslipBets, bet] })),
      removeBetFromBetslip: (bet) =>
        set((state) => ({
          betslipBets: state.betslipBets.filter(
            (b) => b.competitor.urn !== bet.competitor.urn
          ),
        })),
    }),
    { name: "bets-storage" }
  )
);

export default useStore;
