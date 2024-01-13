import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { NewsHeadlines } from "./components/NewsHeadlines/NewsHeadlines";
import { getNewsFeeds } from "./apiActions/getNewsFeeds";
import { useAppDispatch, useAppSelector } from "../../../../common/utils/hooks/reduxHooks";

export const News = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isHeadlineDetailsRoute = location.pathname.includes("headline-details");
  const isFeedDetailsRoute = location.pathname.includes("feed-details");

  const newsArticles = useAppSelector(state => state.news)

  console.log('News', newsArticles)


  useEffect(() => {
    dispatch(getNewsFeeds());
  }, []);

  return (
    <Container maxWidth="xl">
      {isHeadlineDetailsRoute || isFeedDetailsRoute ? (
        <Outlet />
      ) : (
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={9}>
            <NewsFeed />
          </Grid>

          {/* Right Section */}
          <Grid item xs={3}>
            <NewsHeadlines />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
