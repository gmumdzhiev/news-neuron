import React from "react";
import Box from "@mui/material/Box";
import { useWindowDimensions } from "../../../../utils/useWindowDimensions";
import { StyledLogo } from "../common/style";

// @ts-expect-error: Ignoring missing module error for logo import
import logo from "../../../../../assets/nn-logo-long.png";


export const MobileLogo = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <Box sx={{ mr: 1,  flexGrow: 1, }}>
      <StyledLogo src={logo} alt="Logo" windowWidth={windowWidth} />
    </Box>
  );
};
