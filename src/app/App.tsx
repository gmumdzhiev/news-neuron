import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Global } from "@emotion/react";
import { Register } from "./screens/Register/Register";
import { TopBar } from "../common/components/Toolbar/Toolbar";
import { ResetPassword } from "./screens/ResetPassword/ResetPassword";
import { News } from "./screens/Feeds/News/News";
import { Tech } from "./screens/Feeds/Tech/Tech";
import { Sport } from "./screens/Feeds/Sport/Sport";
import { Entertainment } from "./screens/Feeds/Entertainment/Entertainment";
import { NewsHeadlineDetails } from "./screens/Feeds/News/components/NewsHeadlines/components/NewsHeadlineDetails/NewsHeadlineDetails";
import { NewsFeedDetails } from "./screens/Feeds/News/components/NewsFeed/components/NewsFeedDetails/NewsFeedDetails";
import { Favourites } from "./screens/Favourites/Favourites";

export const App = () => {
  return (
    <>
      <Global styles={{ body: { background: "#e0e0e0" } }} />
      <TopBar />
      <Routes>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/news/*" element={<News />}>
          <Route
            path="headline-details/:id"
            element={<NewsHeadlineDetails />}
          />
          <Route path="feed-details/:id" element={<NewsFeedDetails />} />
        </Route>
        <Route path="/sport" element={<Sport />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </>
  );
};
