import { Suspense } from "react";
import { CardsListType } from "../../types/card";
import { CardType } from "../../types/card";
import FootballCard from "../../containers/Cards/FootballCard/FootballCard";
import FootballCardSkeleton from "../FootballCard/Skeleton";

export default function CardComponent({ urn, typename }: CardType) {
  const cardsList: CardsListType = {
    FootballCard: {
      component: <FootballCard />,
      placeholder: <FootballCardSkeleton />,
    },
    // HorseRacingCard: {
    //   component: <HorseRacingCard />,
    //   placeholder: <HorseRacingCardSkeleton />,
    // },
  };

  const Component = cardsList[typename].component;
  const Placeholder = cardsList[typename].placeholder;

  return (
    <Suspense fallback={<Placeholder />}>
      <Component key={urn} />
    </Suspense>
  );
}
