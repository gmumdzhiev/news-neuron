import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  INewsArticle,
  INewsArticleError,
} from "../../News/interface/INewsArticle";

export const getTechHeadlines = createAsyncThunk<
  INewsArticle[],
  void,
  { rejectValue: INewsArticleError }
>("getTechHeadlines/get", async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?category=technology&apiKey=5a45d74ca09549f0965caf9962658e09`,
    { method: "GET" },
  );

  const data = await response.json();
  return data.articles;
});
