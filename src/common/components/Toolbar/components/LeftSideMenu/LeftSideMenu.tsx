import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { IProps } from "./IProps";
import { PageMenu } from "../settings/PageMenu/PageMenu";

export const LeftSideMenu = ({
  anchorElNav,
  setAnchorElNav,
  selectedPage,
  handleCloseNavMenu,
  handlePageClick
}: IProps) => {
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon sx={{ color: "#000000" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {PageMenu.map((menu) => (
          <MenuItem
            key={menu.id}
            onClick={() => {
              handleCloseNavMenu();
              handlePageClick(menu.title);
            }}
            sx={{
              textDecoration:
                selectedPage === menu.title ? "underline" : "none",
              fontWeight: selectedPage === menu.title ? "bold" : "normal",
            }}
          >
            <Typography textAlign="center">{menu.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
