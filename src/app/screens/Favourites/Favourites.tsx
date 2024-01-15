import React from "react";

import { useAppSelector } from "../../../common/utils/hooks/reduxHooks";

export const Favourites = () => {
  const favouriteArticles = useAppSelector((state) => state.favourites.articles);
  console.log('favouriteArticles', favouriteArticles)
  return <p>Favourites</p>;
};
