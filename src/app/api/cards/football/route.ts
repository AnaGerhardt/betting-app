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
            date: new Date().toISOString(),
            odds: {
              firstTeam: "2/9",
              secondTeam: "14/1",
              draw: "9/2",
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
