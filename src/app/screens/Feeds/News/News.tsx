import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { NewsHeadlines } from "./components/NewsHeadlines/NewsHeadlines";



export const News = () => {
  const location = useLocation();
  const isHeadlineDetailsRoute = location.pathname.includes("headline-details");
  const isFeedDetailsRoute = location.pathname.includes("feed-details");

  return (
    <Container maxWidth="xl">
      {isHeadlineDetailsRoute ||  isFeedDetailsRoute ? (
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