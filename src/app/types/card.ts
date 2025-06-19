export type CardsListType = {
  [key: string]: {
    component: React.LazyExoticComponent<() => Promise<React.JSX.Element>>;
  };
};

export type CardType = {
  urn: string;
  typename: string;
};
