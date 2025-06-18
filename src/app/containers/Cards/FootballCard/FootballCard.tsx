import FootballCardComponent from "@/app/components/FootballCard/FootballCard";
import type { FootballCardType } from "@/app/types/football-card";

const FootballCardContainer = async () => {
  const fetchCardContent = await fetch(
    process.env.DOMAIN_URL + "/api/cards/football"
  );
  const cardContent: FootballCardType = await fetchCardContent.json();

  return <FootballCardComponent {...cardContent} />;
};

export default FootballCardContainer;
