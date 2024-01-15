import { IFavouritesState } from "./interfaces/IFavouritesState";

export const initialState: IFavouritesState = {
  articles: Object.values(JSON.parse(localStorage.getItem("favourites") || "{}")),
};