import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { CircularProgress } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../common/utils/hooks/reduxHooks";

// @ts-expect-error: Ignoring missing module error for image import
import paperDefaultImage from "../../../../../../assets/newspaper-background.png";
import { StyledTextContainer } from "../../../../../../common/styles/style";
import { INewsArticle } from "../../../News/interface/INewsArticle";
import { getTechFeeds } from "../../apiActions/getTechFeeds";


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
  typography: {
    color: "#ffffff",
    width: "100%",
  },
  smallPaperTypography: {
    display: "none",
  },
}));

export const TechFeed = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const newsList = useAppSelector((state) => state.tech.list);
  const newsArticles = useMemo(
    () =>
      newsList?.map((article) => ({
        ...article,
        uniqueId: `${article.title}-${article.publishedAt}`,
      })) || [],
    [newsList],
  );
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [page, setPage] = useState(1);

  const [favoriteArticles, setFavoriteArticles] = useState<{
    [key: string]: INewsArticle[];
  }>({});

  useEffect(() => {
    const loadedFavoriteArticles = JSON.parse(
      localStorage.getItem("favorites") || "{}",
    );
    setFavoriteArticles(loadedFavoriteArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteArticles));
  }, [favoriteArticles]);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastArticleElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && news.length < newsArticles.length) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [news, newsArticles],
  );

  const handleFavoriteClick = (index: number) => {
    const currentUserEmail = localStorage.getItem("currentUserEmail");
    if (!currentUserEmail) return;

    const currentFavorites = favoriteArticles[currentUserEmail] || [];
    const isFavorite = currentFavorites.some(
      (article) => article.uniqueId === news[index].uniqueId,
    );

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = currentFavorites.filter(
        (article) => article.uniqueId !== news[index].uniqueId,
      );
    } else {
      updatedFavorites = [...currentFavorites, { ...news[index], favScore: 0 }];
    }

    const updatedFavoriteArticles = {
      ...favoriteArticles,
      [currentUserEmail]: updatedFavorites,
    };
    setFavoriteArticles(updatedFavoriteArticles);

    localStorage.setItem("favorites", JSON.stringify(updatedFavoriteArticles));
  };

  useEffect(() => {
    dispatch(getTechFeeds());
  }, []);

  useEffect(() => {
    setNews((prevNews) => [
      ...prevNews,
      ...newsArticles.slice((page - 1) * 10, page * 10),
    ]);
  }, [page, newsArticles]);

  if (!newsArticles.length) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {news.map((article, index) => {
        const key = `${article.source.id}-${index}`;
        const backgroundImage = article.urlToImage || paperDefaultImage;
        const isSmallPaper = index % 3 !== 0;
        const currentUserEmail = localStorage.getItem("currentUserEmail");
        if (!currentUserEmail) return null;

        const currentFavorites = favoriteArticles[currentUserEmail] || [];
        const isFavorite = currentFavorites.some(
          (favArticle) => favArticle.uniqueId === article.uniqueId,
        );
        if (news.length === index + 1) {
          return (
            <Grid
              ref={lastArticleElementRef}
              key={key}
              item
              xs={12}
              md={index % 3 === 0 ? 12 : 6}
            >
              <div style={{ position: "relative" }}>
                <IconButton
                  style={{
                    position: "absolute",
                    top: "6px",
                    right: "16px",
                    zIndex: 1,
                    background: "#ffffff",
                  }}
                  onClick={() => handleFavoriteClick(index)}
                >
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Link
                  to={`feed-details/${index}`}
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
                    className={`${classes.paper} ${
                      index % 3 === 0 ? classes.largePaper : classes.smallPaper
                    }`}
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

                      {!isSmallPaper && (
                        <Typography
                          className={`${classes.typography} ${
                            isSmallPaper ? classes.smallPaperTypography : ""
                          }`}
                        >
                          {article.description}
                        </Typography>
                      )}
                    </StyledTextContainer>
                  </Paper>
                </Link>
              </div>
            </Grid>
          );
        }
        return (
          <Grid key={key} item xs={12} md={index % 3 === 0 ? 12 : 6}>
            <div style={{ position: "relative" }}>
              <IconButton
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "16px",
                  zIndex: 1,
                  background: "#ffffff",
                }}
                onClick={() => handleFavoriteClick(index)}
              >
                {isFavorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
              <Link
                to={`feed-details/${index}`}
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
              >
                <Paper
                  className={`${classes.paper} ${
                    index % 3 === 0 ? classes.largePaper : classes.smallPaper
                  }`}
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

                    {!isSmallPaper && (
                      <Typography
                        className={`${classes.typography} ${
                          isSmallPaper ? classes.smallPaperTypography : ""
                        }`}
                      >
                        {article.description}
                      </Typography>
                    )}
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
