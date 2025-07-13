import type { MatchType } from "../../store/store.types";

export type CompetitionType = {
  urn: string;
  title: string;
  matches: MatchType[];
};
