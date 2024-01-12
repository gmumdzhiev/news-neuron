import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Box component="span" m={1}> {/* Add space */}
        Copyright © 
      </Box>
      <Link color="inherit" href="https://github.com/gmumdzhiev">
        gmumdzhiev
      </Link>
      <Box component="span" m={1}> {/* Add space */}
        {new Date().getFullYear()}.
      </Box>
    </Typography>
  );
};