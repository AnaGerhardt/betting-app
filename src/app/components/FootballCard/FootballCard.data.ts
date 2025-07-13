import { CompetitionType } from "./FootballCard.types";

export const competitions: CompetitionType[] = [
  {
    urn: "urn:competition:1",
    title: "FIFA Club World Cup",
    matches: [
      {
        urn: "urn:manvwydad",
        name: "Man City v Wydad Casablanca",
        date: "2025-07-19T15:30:00.000Z",
        competitors: [
          {
            urn: "urn:mancity:1",
            name: "Man City",
            odds: "2/9",
          },
          {
            urn: "urn:draw:1",
            name: "Draw",
            odds: "9/2",
          },
          {
            urn: "urn:wydadcasablanca:1",
            name: "Wydad Casablanca",
            odds: "14/1",
          },
        ],
      },
      {
        urn: "urn:sepalmeirasalahlycairo",
        name: "SE Palmeiras v Al Ahly Cairo",
        date: "2025-07-20T14:45:00.000Z",
        competitors: [
          { urn: "urn:sepalmeiras:1", name: "SE Palmeiras", odds: "4/5" },
          { urn: "urn:draw:2", name: "Draw", odds: "5/2" },
          { urn: "urn:alahlycairo:1", name: "Al Ahly Cairo", odds: "3/1" },
        ],
      },
    ],
  },
  {
    urn: "urn:competition:2",
    title: "UEFA U19 Euro Championship",
    matches: [
      {
        urn: "urn:montenegrou19spainu19",
        name: "Montenegro U19 v Spain U19",
        date: "2025-07-22T12:15:00.000Z",
        competitors: [
          {
            urn: "urn:montenegrou19:1",
            name: "Montenegro U19",
            odds: "11/4",
          },
          { urn: "urn:draw:3", name: "Draw", odds: "5/2" },
          { urn: "urn:spainu19:1", name: "Spain U19", odds: "4/6" },
        ],
      },
    ],
  },
];

export default competitions;
