export async function GET() {
  const cards = [
    {
      urn: "urn:football",
      typename: "FootballCard",
    },
    {
      urn: "urn:horseracing",
      typename: "HorseRacingCard",
    },
  ];

  return new Response(JSON.stringify(cards), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
