import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Global } from "@emotion/react";
import { Register } from "./screens/Register/Register";
import { TopBar } from "../common/components/Toolbar/Toolbar";
import { ResetPassword } from "./screens/ResetPassword/ResetPassword";

export const App = () => {
  return (
    <>
      <Global styles={{ body: { background: "#e0e0e0" } }} />
      <TopBar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
    </>
  );
};
