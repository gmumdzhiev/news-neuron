import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Box, Typography } from "@mui/material";

import { StyledSubContainer, StyledToolbar } from "./style";
import { LeftSideMenu } from "./components/LeftSideMenu/LeftSideMenu";
import { RightSideMenu } from "./components/RightSideMenu/RightSideMenu";
import { Navigation } from "./components/Navigation/Navigation";
import { MobileLogo } from "./components/MobileLogo/MobileLogo";
import { DesktopLogo } from "./components/DesktopLogo/DesktopLogo";

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedPage, setSelectedPage] = useState<null | string>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page: string) => {
    console.log(page)

    handleCloseNavMenu();
  };

  console.log("selectedPage", selectedPage);

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
            <StyledSubContainer>
              <Typography
                variant="body1"
                sx={{ marginLeft: 2, alignSelf: "center", color: "grey" }}
              >
                Stimulate your mind with the latest news
              </Typography>
            </StyledSubContainer>
          </Box>

          <Navigation
            handleCloseNavMenu={handleCloseNavMenu}
            handlePageClick={handlePageClick}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <RightSideMenu />
        </Toolbar>
      </Container>
    </StyledToolbar>
  );
};
