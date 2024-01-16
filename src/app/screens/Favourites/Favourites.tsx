import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

import { INewsArticle } from "../Feeds/News/interface/INewsArticle";

// @ts-expect-error: Ignoring missing module error for image import
import paperDefaultImage from "../../../assets/newspaper-background.png";
import { StyledTextContainer } from "../Feeds/News/components/NewsFeed/style";

const useStyles = makeStyles(() => ({
  paper: {
    padding: useTheme().spacing(2),
    margin: useTheme().spacing(2),
    borderRadius: useTheme().spacing(2),
    height: 450,
  },
  typography: {
    color: "#ffffff",
    width: "100%",
  },
}));

export const Favourites = () => {
  const classes = useStyles();
  const [favoriteArticles, setFavoriteArticles] = useState<{
    [key: string]: INewsArticle[];
  }>({});
  useEffect(() => {
    const loadedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "{}",
    );
    setFavoriteArticles(loadedFavorites);
  }, []);

  const handleFavoriteClick = (email: string, index: number) => {
    const currentFavorites = favoriteArticles[email] || [];
    const updatedFavorites = currentFavorites.filter(
      (_, i: number) => i !== index,
    );
    setFavoriteArticles({ ...favoriteArticles, [email]: updatedFavorites });
    localStorage.setItem(
      "favorites",
      JSON.stringify({ ...favoriteArticles, [email]: updatedFavorites }),
    );
  };

  const currentUserEmail = localStorage.getItem("currentUserEmail");
  if (!currentUserEmail) return null;

  const currentFavorites = favoriteArticles[currentUserEmail] || [];

  return (
    <Grid container spacing={2}>
      {currentFavorites.map((article: INewsArticle, index: number) => {
        const backgroundImage = article.urlToImage || paperDefaultImage;
        return (
          <Grid key={article.source.id} item xs={12} sm={6}>
            <div style={{ position: "relative" }}>
              <IconButton
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "16px",
                  zIndex: 1,
                  background: "#ffffff",
                }}
                onClick={() => handleFavoriteClick(currentUserEmail, index)}
              >
                <Favorite />
              </IconButton>
              <Link
                  to={`/news/feed-details/${index}`}
                  state={{
                    title: article.title,
                    description: article.description,
                    content: article.content,
                    date: article.publishedAt,
                    author: article.author,
                    url: article.url,
                    image: article.urlToImage,
                    id: index,
                  }}
                  style={{ textDecoration: "none" }}
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
                  <Typography className={classes.typography} variant="h6">
                    {article.title}
                  </Typography>
                  <Typography className={classes.typography}>
                    {article.description}
                  </Typography>
                </StyledTextContainer>
              </Paper>
              </Link>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};
