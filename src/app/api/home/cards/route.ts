export async function GET() {
  const cards = [
    {
      urn: 123,
      typename: "FootballCard",
    },
    {
      urn: 321,
      typename: "HorseRacingCard",
    },
  ];

  return new Response(JSON.stringify(cards), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
