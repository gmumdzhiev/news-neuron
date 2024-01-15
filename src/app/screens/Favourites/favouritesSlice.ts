import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsArticle } from "../Feeds/News/interface/INewsArticle";
import { initialState } from "./initialFavouriteState";
import { v4 as uuidv4 } from "uuid";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<INewsArticle>) => {
      const article = action.payload;
      const articleId = article.id || uuidv4(); 
      state.articles.push({ ...article, id: articleId }); 
      state.favourites[articleId] = true; 
      const currentUserEmail = localStorage.getItem("currentUserEmail");
      if (currentUserEmail) {
        localStorage.setItem(`favourites-${currentUserEmail}`, JSON.stringify(state.articles));
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      const articleId = action.payload;
      state.articles = state.articles.filter(article => article.id !== articleId); 
      delete state.favourites[articleId]; 
      const currentUserEmail = localStorage.getItem("currentUserEmail");
      if (currentUserEmail) {
        localStorage.setItem(`favourites-${currentUserEmail}`, JSON.stringify(state.articles));
      }
    },
  },
});