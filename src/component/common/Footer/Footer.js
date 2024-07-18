import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      className="global-container"
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Box sx={{ textAlign: "start" }}>
            <img src="/assets/logo.png" alt="" width="200px" />
            <Typography
              sx={{
                lineHeight: "24px",
                fontSize: "20px",
                fontWeight: "400",
                mt: 6,
              }}
            >
              Empower your IoT solutions with decentralized blockchain security.
              Transparent, Immutable, and Scalable.
            </Typography>
            <Typography
              sx={{
                lineHeight: "16px",
                fontWeight: "400",
                mt: 8,
                textDecoration: "underline",
              }}
            >
              support@wolfberryllc.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} sx={{ textAlign: "start", marginLeft: "80px" }}>
          <Box className="quick-links">
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ marginTop: "-45px" }}>
                <Box>
                  <Typography
                    sx={{
                      lineHeight: "21.6px",
                      fontWeight: "500",
                      marginBottom: 3,
                      fontSize: "18px",
                    }}
                  >
                    Quick Links
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "21.6px",
                      fontWeight: "400",
                      fontSize: "18px",
                      mb: 3,
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "21.6px",
                      fontWeight: "400",
                      fontSize: "18px",
                      mb: 3,
                    }}
                  >
                    Data Security
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "21.6px",
                      fontSize: "18px",
                      fontWeight: "400",
                      mb: 3,
                    }}
                  >
                    Process
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "-45px" }}>
                <Typography
                  sx={{
                    lineHeight: "21.6px",
                    fontWeight: "500",
                    marginBottom: 3,
                    fontSize: "18px",
                  }}
                >
                  Features
                </Typography>
                <Typography
                  sx={{
                    lineHeight: "21.6px",
                    fontWeight: "500",
                    marginBottom: 3,
                    fontSize: "18px",
                  }}
                >
                  Membership
                </Typography>
                <Typography
                  sx={{
                    lineHeight: "21.6px",
                    fontWeight: "500",
                    marginBottom: 3,
                    fontSize: "18px",
                  }}
                >
                  FAQ
                </Typography>
                <Typography
                  sx={{
                    lineHeight: "21.6px",
                    fontWeight: "500",
                    marginBottom: 3,
                    fontSize: "18px",
                  }}
                >
                  Book a demo
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ marginTop: "-45px" }}>
          <Box
            className="follow-us"
            sx={{ textAlign: "start", marginLeft: "30px" }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "500",
                mb: 3,
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            >
              <img src="/assets/footer-logo.png" alt="" />
              <Typography
                sx={{
                  lineHeight: "21.6px",
                  fontWeight: "500",
                  fontSize: "18px",
                  marginLeft: 1,
                }}
              >
                iotdefender
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            >
              <img src="/assets/footer-logo.png" alt="" />
              <Typography
                sx={{
                  lineHeight: "21.6px",
                  fontWeight: "500",
                  fontSize: "18px",
                  marginLeft: 1,
                }}
              >
                iotdefender
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Divider sx={{ width: "100%", borderColor: "white", mt: 4, mb: 6 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "19.2px" }}
          >
            © 2024 IoT Defender
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", lineHeight: "19.2px" }}
          >
            Privacy Policy - Terms & Conditions
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
