import Card from "./components/Card/Card";

export default function Home() {
  const cards = [
    {
      urn: "urn:football",
      typename: "FootballCard",
    },
  ];

  return (
    <>
      {cards.map((card) => {
        const { urn, typename } = card;
        return <Card key={urn} urn={urn} typename={typename} />;
      })}
    </>
  );
}
