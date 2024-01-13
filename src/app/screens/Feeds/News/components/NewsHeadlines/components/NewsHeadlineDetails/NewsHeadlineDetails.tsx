import React from "react";
import { useLocation } from "react-router-dom";

export const NewsHeadlineDetails = () => {
  const location = useLocation();
  const { title, id } = location.state || {};

  console.log("test", id);

  return (
    <div>
      <h1>Headline{title}</h1>
    </div>
  );
};
