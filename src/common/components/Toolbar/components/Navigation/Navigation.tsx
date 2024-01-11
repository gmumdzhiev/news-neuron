import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { PageMenu } from "../settings/PageMenu/PageMenu";
import { IProps } from "./IProps";

export const Navigation = ({
  handleCloseNavMenu,
  handlePageClick,
  selectedPage,
}: IProps) => {
  return (
    <Box sx={{display: { xs: "none", md: "flex" }, margin: '0 16px' }}>
      {PageMenu.map((page) => (
        <Button
          key={page.id}
          onClick={() => {
            handleCloseNavMenu();
            handlePageClick(page.title);
          }}
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
