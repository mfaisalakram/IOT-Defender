import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    // <Box
    //   className="Banner"
    //   sx={{
    //     width: "100%",
    //     // background: "orange",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <Box
      className="global-container n-auto"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        // maxWidth: "1620px", // Ensures the content has a maximum width
        // background: "grey",
        height: "154px",
      }}
    >
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flex: 2,
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
          Data Security
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Inter Tight",
          }}
        >
          Process
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "700",fontFamily: "Inter Tight", }}>
          Features
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "700",fontFamily: "Inter Tight", }}>
          Membership
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "700",fontFamily: "Inter Tight", }}>
          FAQ
        </Typography>
        <Button
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            color: "black",
            background: "#C9E265",
            borderRadius: "100px",
            "&:hover": {
              backgroundColor: "#C9E265",
              color: "black",
            },
          }}
          variant="contained"
        >
          Book a demo
        </Button>
      </Box>
    </Box>
    // </Box>
  );
};

export default Header;
