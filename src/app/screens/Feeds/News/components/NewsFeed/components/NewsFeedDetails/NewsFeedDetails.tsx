import React from "react";
import { useLocation } from "react-router-dom";

export const NewsFeedDetails = () => {
  const location = useLocation();
  const { title, id } = location.state || {};

  console.log("test", id);

  return (
    <div>
      <h1>Feed {title}</h1>
    </div>
  );
};
