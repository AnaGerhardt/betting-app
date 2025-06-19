import type { PageType } from "./types/page";
import Card from "./components/Card/Card";

export default async function Home() {
  const fetchHomeContent = await fetch(
    process.env.DOMAIN_URL + "/api/cards/home"
  );
  const homeContent: PageType = await fetchHomeContent.json();

  return (
    <>
      {homeContent.cards.map((card) => {
        const { urn, typename } = card;
        return <Card key={urn} urn={urn} typename={typename} />;
      })}
    </>
  );
}
