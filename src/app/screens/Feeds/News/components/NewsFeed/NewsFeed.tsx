import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  paper: {
    padding: useTheme().spacing(2),
    margin: useTheme().spacing(1),
    borderRadius: useTheme().spacing(2),
  },
  largePaper: {
    height: 450,
  },
  smallPaper: {
    height: 200,
  },
  paperWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const NewsFeed = () => {
  const classes = useStyles();

  const initialNews = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `News Title ${index + 1}`,
    description: `Description of News ${index + 1}`,
  }));

  const [news] = useState(initialNews);

  useEffect(() => {
    console.log("fetching new articles");
  }, []);

  return (
    <Grid container spacing={2}>
      {news.map((article, index) => (
        <Grid key={article.id} item xs={12} md={index % 3 === 0 ? 12 : 6}>
          <Link
            key={article.id}
            to={`feed-details/${article.id}`}
            state={{ title: "foo", id: article.id }}
          >
            <Paper
              className={`${classes.paper} ${
                index % 3 === 0 ? classes.largePaper : classes.smallPaper
              }`}
            >
              <Typography variant="h6">{article.title}</Typography>
              <Typography>{article.description}</Typography>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
