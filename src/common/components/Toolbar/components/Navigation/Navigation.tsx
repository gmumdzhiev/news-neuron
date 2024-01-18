import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { PageMenu } from "../settings/PageMenu/PageMenu";
import { IProps } from "./IProps";

export const Navigation = ({
  handleCloseNavMenu,
  selectedPage,
  setSelectedPage
}: IProps) => {
  const navigate = useNavigate();

  const handlePageClick = (title: string, route: string) => {
    handleCloseNavMenu();
    setSelectedPage(title)
    navigate(route);
  }; 

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, margin: '0 16px' }}>
      {PageMenu.map((page) => (
        <Button
          key={page.id}
          onClick={() => handlePageClick(page.title, page.route)}
          sx={{
            my: 2,
            color: selectedPage === page.title ? "black" : "grey",
            borderBottom:
              selectedPage === page.title
                ? "2px solid black"
                : "2px solid transparent",
            fontWeight: selectedPage === page.title ? "bold" : "normal",
            display: "block",
            borderRadius: 0,
            margin: "24px 0 20px 0",
            fontSize: "1.2em",
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};