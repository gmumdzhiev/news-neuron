import React from "react";

import Box from "@mui/material/Box";
import { useWindowDimensions } from "../../../../utils/hooks/useWindowDimensions";

// @ts-expect-error: Ignoring missing module error for logo import
import logo from "../../../../../assets/nn-logo-long.png";
import { StyledLogo } from "../common/style";

export const DesktopLogo = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <StyledLogo src={logo} alt="Logo" windowWidth={windowWidth} />
    </Box>
  );
};
