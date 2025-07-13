import { CardType, CardsListType } from "./Card.types";
import FootballCard from "../FootballCard/FootballCard";

export default function CardComponent({ urn, typename }: CardType) {
  const cardsList: CardsListType = {
    FootballCard: {
      component: FootballCard,
    },
  };

  const Component = cardsList[typename].component;

  return <Component key={urn} />;
}
