import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
// @ts-expect-error: Ignoring missing module error for image import
import articleDefaultImage from "../../../../../../../../assets/newspaper-background.png";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: useTheme().spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
  },
  title: {
    margin: "0",
    color: "#232a31",
    fontSize: "3.5em",
    fontStretch: "normal",
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: "normal",
    lineHeight: "1.15",
    borderBottom: "5px solid black",
    marginBottom: "16px",
  },
  description: {
    fontSize: "1.846em",
    fontWeight: "400",
    lineHeight: "1.42",
    color: "#5b636a",
  },
  content: {
    fontSize: "1.5rem",
    margin: useTheme().spacing(2, 0),
    width: "100%",
  },
  author: {
    fontSize: "1.2rem",
    width: "100%",
  },
  date: {
    width: "100%",
    paddingTop: "0",
    fontWeight: "500",
    fontSize: ".8em",
    lineHeight: "16px",
    color: "#6e7780",
  },
  link: {
    width: "100%",
  },
  authorBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: useTheme().spacing(2),
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    margin: useTheme().spacing(2, 0),
  },
  avatar: {
    marginRight: useTheme().spacing(1),
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
  },
  socialIcon: {
    marginLeft: useTheme().spacing(1),
  },
}));

export const NewsFeedDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const { title, content, description, date, author, url, image } =
    location.state || {};

  const articleImage = image || articleDefaultImage;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Container className={classes.root}>
      <Box className={classes.backButtonContainer}>
        <IconButton onClick={() => navigate("/news")}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h2" className={classes.description}>
        {description}
      </Typography>
      <Box className={classes.authorBox}>
        <Box className={classes.authorInfo}>
          <Avatar alt={author} className={classes.avatar} />
          <Box>
            <Typography className={classes.author}>{author}</Typography>
            <Typography className={classes.date}>
              Written on, {formattedDate} - 3/5 min read
            </Typography>
          </Box>
        </Box>
        <Box className={classes.socialIcons}>
          <IconButton className={classes.socialIcon}>
            <FacebookIcon />
          </IconButton>
          <IconButton className={classes.socialIcon}>
            <InstagramIcon />
          </IconButton>
          <IconButton className={classes.socialIcon}>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
      <img src={articleImage} alt={title} className={classes.image} />
      <Typography className={classes.content}>{content}</Typography>
      <Typography>
        You can always read more about 👉🏻
        <Link
          className={classes.link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
      </Typography>
    </Container>
  );
};
