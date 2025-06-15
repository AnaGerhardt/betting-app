import { Suspense } from "react";
import { CardsListType } from "../../types/card";
import { CardType } from "../../types/card";

export default function HeaderComponent({ urn, typename }: CardType) {
  const cardsList: CardsListType = {
    FootballCard: {
      component: <FootballCard />,
      placeholder: <FootballCardSkeleton />,
    },
    HorseRacingCard: {
      component: <HorseRacingCard />,
      placeholder: <HorseRacingCardSkeleton />,
    },
  };

  const Component = cardsList[typename].component;
  const Placeholder = cardsList[typename].placeholder;

  return (
    <Suspense fallback={<Placeholder />}>
      <Component urn={urn} />
    </Suspense>
  );
}
