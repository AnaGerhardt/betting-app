export type CardsListType = {
  [key: string]: {
    component: React.FunctionComponent<any>;
    placeholder: React.FunctionComponent<any>;
  };
};

export type CardType = {
  urn: string;
  typename: string;
};
