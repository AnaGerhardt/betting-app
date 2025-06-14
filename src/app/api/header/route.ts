export async function GET() {
  const header = {
    title: "Welcome to Betting",
    slogan: "Place your bet!",
  };

  return new Response(JSON.stringify(header), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
