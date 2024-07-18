import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box className="global-container">
      <Box
        className="logo"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          // background: "red",
          flex: 1,
        }}
      >
        <img src="/assets/logo.png" alt="" width="200px" />
        <Typography sx={{ lineHeight: "24px", fontWeight: "400" }}>
          Empower your IoT solutions with decentralized blockchain security.
          Transparent, Immutable, and Scalable.
        </Typography>
        <Typography sx={{ lineHeight: "16px", fontWeight: "400" }}>
          support@wolfberryllc.com
        </Typography>
      </Box>
    </Box>
  );
};
