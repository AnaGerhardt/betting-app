export async function GET() {
  const response = {
    cards: [
      {
        urn: "urn:football",
        typename: "FootballCard",
      },
      // {
      //   urn: "urn:horseracing",
      //   typename: "HorseRacingCard",
      // },
    ],
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
