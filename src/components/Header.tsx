import React from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const headerVariant = matches ? "h4" : "h3";

  return (
    <Box sx={{ margin: "1rem", textAlign: "center", color: "white" }}>
      <Typography variant={headerVariant} id="top">
        Frontend Challenge
      </Typography>
    </Box>
  );
};

export default Header;
