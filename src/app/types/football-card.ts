type OddsType = {
  firstTeam: string;
  draw: string;
  secondTeam: string;
};

export type MatchType = {
  urn: string;
  name: string;
  date: string;
  odds: OddsType;
};

type CompetitionsType = {
  urn: string;
  title: string;
  matches: MatchType[];
};

export type FootballCardType = {
  competitions: CompetitionsType[];
};
