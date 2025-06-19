export async function GET() {
  const response = {
    competitions: [
      {
        urn: "urn:competition:1",
        title: "FIFA Club World Cup",
        matches: [
          {
            urn: "urn:manvwydad",
            name: "Man City v Wydad Casablanca",
            date: "2025-07-19T15:30:00.000Z",
            odds: {
              firstTeam: "2/9",
              secondTeam: "14/1",
              draw: "9/2",
            },
          },
          {
            urn: "urn:sepalmeirasalahlycairo",
            name: "SE Palmeiras v Al Ahly Cairo",
            date: "2025-07-20T14:45:00.000Z",
            odds: {
              firstTeam: "8/15",
              secondTeam: "23/10",
              draw: "3/1",
            },
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
            odds: {
              firstTeam: "4/9",
              secondTeam: "5/2",
              draw: "5/1",
            },
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
