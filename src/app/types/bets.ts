export type CompetitorType = {
  urn: string;
  name: string;
  odds: string;
};

export type MatchType = {
  urn: string;
  name: string;
  date: string;
  competitors: CompetitorType[];
};

export type BetType = {
  matchName: string;
  competitor: CompetitorType;
};
