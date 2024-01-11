import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Global } from "@emotion/react";
import { Login } from "./screens/Login/Login";
import { TopBar } from "../common/components/Toolbar/Toolbar";

export const App = () => {
  return (
    <>
      <Global styles={{ body: { background: "#e0e0e0" } }} />
      <TopBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
