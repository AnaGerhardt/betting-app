export type CardsListType = {
  [key: string]: {
    component: () => React.JSX.Element;
  };
};

export type CardType = {
  urn: string;
  typename: string;
};
