import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { Global } from "@emotion/react";
import { Register } from "./screens/Register/Register";
import { TopBar } from "../common/components/Toolbar/Toolbar";
import { ResetPassword } from "./screens/ResetPassword/ResetPassword";
import { News } from "./screens/Feeds/News/News";
import { Tech } from "./screens/Feeds/Tech/Tech";
import { Local } from "./screens/Feeds/Local/Local";
import { NewsHeadlineDetails } from "./screens/Feeds/News/components/NewsHeadlines/components/NewsHeadlineDetails/NewsHeadlineDetails";
import { NewsFeedDetails } from "./screens/Feeds/News/components/NewsFeed/components/NewsFeedDetails/NewsFeedDetails";
import { Favourites } from "./screens/Favourites/Favourites";
import { Login } from "./screens/Login/Login";
import { Home } from "./screens/Home/Home";
import { TechHeadlineDetails } from "./screens/Feeds/Tech/components/TechHeadlines/components/TechHeadlineDetails.tsx/TechHeadlineDetails";
import { TechFeedDetails } from "./screens/Feeds/Tech/components/TechFeed/components/TechFeedDetails/TechFeedDetails";
import { LocalFeedDetails } from "./screens/Feeds/Local/components/LocalFeed/components/LocalFeedDetails/LocalFeedDetails";
import { LocalHeadlineDetails } from "./screens/Feeds/Local/components/LocalHeadlines/components/LocalHeadlineDetails";

export const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("currentUserEmail"));
  const navigate = useNavigate();
  const location = useLocation();
  const protectedRoutes = ["/favourites", "/news", "/sport", "/tech", "/Local"];

  useEffect(() => {
    if (!isAuthenticated && protectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <>
      <Global styles={{ body: { background: "#e0e0e0" } }} />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/news" replace />
          }
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/reset-password"
          element={
            !isAuthenticated ? <ResetPassword /> : <Navigate to="/" replace />
          }
        />

        <Route
          path="/favourites"
          element={
            isAuthenticated ? <Favourites /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/news/*"
          element={
            isAuthenticated ? <News /> : <Navigate to="/login" replace />
          }
        >
          <Route
            path="headline-details/:id"
            element={<NewsHeadlineDetails />}
          />
          <Route path="feed-details/:id" element={<NewsFeedDetails />} />
        </Route>
        <Route
          path="/tech/*"
          element={
            isAuthenticated ? <Tech /> : <Navigate to="/login" replace />
          }
        >
          <Route
            path="headline-details/:id"
            element={<TechHeadlineDetails />}
          />
          <Route path="feed-details/:id" element={<TechFeedDetails />} />
        </Route>
        <Route
          path="/local/*"
          element={
            isAuthenticated ? <Local /> : <Navigate to="/login" replace />
          }
        >
          <Route
            path="headline-details/:id"
            element={<LocalHeadlineDetails />}
          />
          <Route path="feed-details/:id" element={<LocalFeedDetails />} />
        </Route>
      </Routes>
    </>
  );
};
