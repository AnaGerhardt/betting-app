import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BetType } from "../types/bets";

interface StoreState {
  bets: BetType[];
  addBet: (bet: BetType) => void;
  removeBet: (bet: BetType) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      bets: [],
      addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
      removeBet: (bet) =>
        set((state) => ({
          bets: state.bets.filter(
            (b) => b.competitor.urn !== bet.competitor.urn
          ),
        })),
    }),
    { name: "bets-storage" }
  )
);

export default useStore;
