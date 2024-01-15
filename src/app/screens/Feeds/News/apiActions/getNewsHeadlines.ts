import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewsArticle, INewsArticleError } from "../interface/INewsArticle";

export const getNewsHeadlines = createAsyncThunk<
  INewsArticle[],
  void,
  { rejectValue: INewsArticleError }
>("getNewsHeadlines/get", async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=5a45d74ca09549f0965caf9962658e09`,
    { method: "GET" },
  );

  const data = await response.json();
  console.log('getNewsHeadlines',data)
  return data.articles;

});
