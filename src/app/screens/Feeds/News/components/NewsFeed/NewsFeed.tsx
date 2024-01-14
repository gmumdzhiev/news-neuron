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

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../common/utils/hooks/reduxHooks";
import { INewsArticle } from "../../interface/INewsArticle";
import { getNewsFeeds } from "../../apiActions/getNewsFeeds";

// @ts-expect-error: Ignoring missing module error for image import
import paperDefaultImage from "../../../../../../assets/newspaper-background.png";
import { StyledTextContainer } from "./style";

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

export const NewsFeed = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const newsList = useAppSelector((state) => state.news.list);
  const newsArticles = useMemo(() => newsList || [], [newsList]);
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [page, setPage] = useState(1);
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

  useEffect(() => {
    dispatch(getNewsFeeds());
  }, [dispatch]);

  useEffect(() => {
    setNews((prevNews) => [
      ...prevNews,
      ...newsArticles.slice((page - 1) * 10, page * 10),
    ]);
  }, [page, newsArticles]);

  if (!newsArticles.length) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {news.map((article, index) => {
        const key = `${article.source.id}-${index}`;
        const backgroundImage = article.urlToImage || paperDefaultImage;
        const isSmallPaper = index % 3 !== 0;
        if (news.length === index + 1) {
          return (
            <Grid
              ref={lastArticleElementRef}
              key={key}
              item
              xs={12}
              md={index % 3 === 0 ? 12 : 6}
            >
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
            </Grid>
          );
        }
        return (
          <Grid key={key} item xs={12} md={index % 3 === 0 ? 12 : 6}>
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
          </Grid>
        );
      })}
    </Grid>
  );
};
