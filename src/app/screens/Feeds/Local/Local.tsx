import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { LocalFeed } from "./components/LocalFeed/LocalFeed";
import { LocalHeadlines } from "./components/LocalHeadlines/LocalHeadlines";

const useStyles = makeStyles(() => ({
  typography: {
    margin: "16px !important",
    borderBottom: "3px solid black",
    fontWeight: "700 !important",
    fontSize: "1.2rem !important",
  },
}));

export const Local = () => {
  const classes = useStyles();
  const location = useLocation();
  const isHeadlineDetailsRoute = location.pathname.includes("headline-details");
  const isFeedDetailsRoute = location.pathname.includes("feed-details");

  return (
    <Container maxWidth="xl">
      {isHeadlineDetailsRoute || isFeedDetailsRoute ? (
        <Outlet />
      ) : (
        <Grid container spacing={3}>
          {/* Left Section */}
          <Grid item xs={12} md={9}>
            <Typography className={classes.typography}>LATEST LOCAL</Typography>
            <LocalFeed />
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={3}>
            <Typography className={classes.typography}>
              TOP HEADLINES
            </Typography>
            <LocalHeadlines />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
