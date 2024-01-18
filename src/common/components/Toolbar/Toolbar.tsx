import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Box } from "@mui/material";

import { StyledToolbar } from "./style";
import { LeftSideMenu } from "./components/LeftSideMenu/LeftSideMenu";
import { RightSideMenu } from "./components/RightSideMenu/RightSideMenu";
import { Navigation } from "./components/Navigation/Navigation";
import { MobileLogo } from "./components/MobileLogo/MobileLogo";
import { DesktopLogo } from "./components/DesktopLogo/DesktopLogo";

import { PageMenu } from "./components/settings/PageMenu/PageMenu";

export const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedPage, setSelectedPage] = useState<null | string>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const rememberMeToken = localStorage.getItem("rememberMeToken");
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  useEffect(() => {
    const currentPage = PageMenu.find((page) =>
      location.pathname.startsWith(page.route),
    );
    if (currentPage) {
      setSelectedPage(currentPage.title);
    }
  }, [location]);

  useEffect(() => {
    if (rememberMeToken || currentUserEmail) {
      setLoggedIn(true);
    }
  }, [rememberMeToken, currentUserEmail]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (route: string) => {
    handleCloseNavMenu();
    navigate(route)
  };

  return (
    <StyledToolbar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftSideMenu
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
            selectedPage={selectedPage}
            handleCloseNavMenu={handleCloseNavMenu}
            handlePageClick={handlePageClick}
          />

          <MobileLogo />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <DesktopLogo />
          </Box>
          {currentUserEmail && (
            <Navigation
              handleCloseNavMenu={handleCloseNavMenu}
              handlePageClick={handlePageClick}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}

          <RightSideMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Toolbar>
      </Container>
    </StyledToolbar>
  );
};
