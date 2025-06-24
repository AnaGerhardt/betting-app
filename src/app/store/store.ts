import { create } from "zustand";
import { BetType } from "../types/bets";

interface StoreState {
  bets: BetType[];
  addBet: (bet: BetType) => void;
  removeBet: (bet: BetType) => void;
  removeAllBets: () => void;
}

const useStore = create<StoreState>((set) => ({
  bets: [],
  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
  removeBet: (bet) =>
    set((state) => ({
      bets: state.bets.filter((b) => b.competitor.urn === bet.competitor.urn),
    })),
  removeAllBets: () => set({ bets: [] }),
}));

export default useStore;
