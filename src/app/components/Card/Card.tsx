import { Suspense, lazy } from "react";
import { CardType, CardsListType } from "../../types/card";
import Placeholder from "../../components/Card/Skeleton";

const FootballCard = lazy(
  () => import("../../containers/Cards/FootballCard/FootballCard")
);

export default function CardComponent({ urn, typename }: CardType) {
  const cardsList: CardsListType = {
    FootballCard: {
      component: FootballCard,
    },
  };

  const Component = cardsList[typename].component;

  return (
    <Suspense fallback={<Placeholder />}>
      <Component key={urn} />
    </Suspense>
  );
}
