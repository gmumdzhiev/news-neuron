import React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  paper: {
    padding: useTheme().spacing(2),
    margin: useTheme().spacing(1),
    borderRadius: useTheme().spacing(2),
    cursor: "pointer",
  },
}));

export const NewsHeadlines = () => {
  const classes = useStyles();

  // Dummy data for news headlines
  const headlines = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Headline ${index + 1}`,
    content: `Content of Headline ${index + 1}`,
  }));

  return (
    <>
      {headlines.map((headline) => (
        <Link
          key={headline.id}
          to={`headline-details/${headline.id}`}
          state={{ title: "foo", id: headline.id }}
        >
          <Paper className={classes.paper}>
            <Typography variant="h6">{headline.title}</Typography>
            <Typography>{headline.content}</Typography>
          </Paper>
        </Link>
      ))}
    </>
  );
};
