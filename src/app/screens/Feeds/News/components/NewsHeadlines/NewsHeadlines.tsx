import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../common/utils/hooks/reduxHooks";
import { getNewsHeadlines } from "../../apiActions/getNewsHeadlines";

// @ts-expect-error: Ignoring missing module error for image import
import paperDefaultImage from "../../../../../../assets/newspaper-background.png";
import { StyledTextContainer } from "../NewsFeed/style";

const useStyles = makeStyles(() => ({
  paper: {
    padding: useTheme().spacing(2),
    margin: useTheme().spacing(1),
    borderRadius: useTheme().spacing(2),
    cursor: "pointer",
    height: "180px",
  },
  title: {
    fontSize: "0.85em !important",
    color: "#ffffff"
  },
}));

export const NewsHeadlines = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const newHeadlinesList = useAppSelector((state) => state.newsHeadlines.list);

  console.log('newHeadlinesList', newHeadlinesList)

  useEffect(() => {
    dispatch(getNewsHeadlines());
  }, [dispatch]);

  if (!newHeadlinesList) {
    return <div>Loading...</div>;
  }

  const headlinesToShow = newHeadlinesList.length ? newHeadlinesList.slice(0, 20) : [];

  return (
    <>
      {headlinesToShow.map((headline, index) => {
        const key = `${headline.source.id}-${index}`;
        const backgroundImage = headline.urlToImage || paperDefaultImage;
        return (
          <Link
            key={key}
            to={`headline-details/${index}`}
            state={{
              title: headline.title,
              description: headline.description,
              content: headline.content,
              date: headline.publishedAt,
              author: headline.author,
              url: headline.url,
              image: headline.urlToImage,
              id: index,
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <StyledTextContainer>
              <Typography className={classes.title} variant="h6">
                {headline.title}
              </Typography>
              </StyledTextContainer>
            </Paper>
          </Link>
        );
      })}
    </>
  );
};
