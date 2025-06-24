import type { CompetitorType, MatchType } from "./bets";

type CompetitionsType = {
  urn: string;
  title: string;
  matches: MatchType[];
};

export type FootballCardType = {
  competitions: CompetitionsType[];
};
