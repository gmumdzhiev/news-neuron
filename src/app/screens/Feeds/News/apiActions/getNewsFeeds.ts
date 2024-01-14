import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewsArticle, INewsArticleError } from "../interface/INewsArticle";

export const getNewsFeeds = createAsyncThunk<
  INewsArticle[],
  void,
  { rejectValue: INewsArticleError }
>("getNewsFeed/get", async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=news&apiKey=5a45d74ca09549f0965caf9962658e09`,
    { method: "GET" },
  );

  const data = await response.json();

  return data.articles;
});
