import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewsArticle, INewsArticleError } from "../interface/INewsArticle";

export const getNewsFeeds = createAsyncThunk<
  INewsArticle[],
  void,
  { rejectValue: INewsArticleError }
>("getNewsFeed/get", async () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const formattedToday = today.toISOString().split("T")[0];
  const formattedSevenDaysAgo = sevenDaysAgo.toISOString().split("T")[0];

  const url = [
    "https://newsapi.org/v2/everything?q=europe",
    `&from=${formattedSevenDaysAgo}`,
    `&to=${formattedToday}`,
    "&sortBy=popularity",
    "&apiKey=5a45d74ca09549f0965caf9962658e09"
  ].join("");

  const response = await fetch(url, { method: "GET" });

  const data = await response.json();
  return data.articles;
});