import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Popover,
  Button,
} from "@mui/material";
import { Star, Favorite } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { StyledTextContainer } from "../Feeds/News/components/NewsFeed/style";

import { INewsArticle } from "../Feeds/News/interface/INewsArticle";

// @ts-expect-error: Ignoring missing module error for image import
import paperDefaultImage from "../../../assets/newspaper-background.png";

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
  popTypgoraphy: {
    textAlign: "center",
  },
}));

export const Favourites = () => {
  const classes = useStyles();
  const [favoriteArticles, setFavoriteArticles] = useState<{
    [key: string]: INewsArticle[];
  }>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const loadedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "{}",
    );
    setFavoriteArticles(loadedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteArticles));
  }, [favoriteArticles]);


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

  const handleScoreClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentArticleIndex(index);
  };

  const handleScoreClose = () => {
    setAnchorEl(null);
    setCurrentArticleIndex(null);
  };

  const handleScoreChange = (
    email: string,
    index: number,
    newScore: number,
  ) => {
    const currentFavorites = favoriteArticles[email] || [];
    const updatedFavorites = currentFavorites.map((article, i) =>
      i === index ? { ...article, favScore: newScore } : article,
    );
    setFavoriteArticles({ ...favoriteArticles, [email]: updatedFavorites });
    localStorage.setItem(
      "favorites",
      JSON.stringify({ ...favoriteArticles, [email]: updatedFavorites }),
    );
  
    handleScoreClose();
  };

  const currentUserEmail = localStorage.getItem("currentUserEmail");
  if (!currentUserEmail) return null;

  const currentFavorites = (favoriteArticles[currentUserEmail] || []).sort(
    (a, b) => b.favScore - a.favScore,
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container spacing={2}>
      {currentFavorites.map((article: INewsArticle, index: number) => {
        const backgroundImage = article.urlToImage || paperDefaultImage;
        return (
          <Grid 
          key={index} // eslint-disable-line react/no-array-index-key
          item xs={12} sm={6}>
            <div style={{ position: "relative" }}>
              <IconButton
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "76px",
                  zIndex: 1,
                  background: "#ffffff",
                  height: "50px",
                  borderRadius: "15px",
                }}
                onClick={(event) => handleScoreClick(event, index)}
              >
                {article.favScore}
                <Star />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleScoreClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.popTypgoraphy}>
                  Rate your favouriite article
                </Typography>
                {[...Array(10)].map((_, i) => (
                  <Button
                    key={i} // eslint-disable-line react/no-array-index-key
                    onClick={() =>
                      handleScoreChange(
                        currentUserEmail,
                        currentArticleIndex!,
                        i + 1,
                      )
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
              </Popover>
              <IconButton
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "20px",
                  zIndex: 1,
                  background: "#ffffff",
                  height: "50px",
                  width: "50px",
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
