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
        <Grid item xs={12} md={3}>
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
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            maxHeight: "531px",
            textAlign: "start",
            marginTop: { xs: "70px", md: "0px" },
            marginLeft: { md: "80px" },
          }}
        >
          <Box className="quick-links">
            <Typography
              sx={{
                lineHeight: "21.6px",
                fontWeight: "600",
                marginBottom: 3,
                fontSize: "18px",
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 2,
                maxHeight: "100%",
                overflow: "hidden",
              }}
            >
              {[
                "Home",
                "Data Security",
                "Process",
                "Membership",
                "FAQ",
                "Book a demo",
              ].map((link, index) => (
                <Typography
                  key={index}
                  sx={{
                    lineHeight: "21.6px",
                    fontWeight: "400",
                    fontSize: "18px",
                    mb: 3,
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ marginTop: { xs: 3, md: "-45px" } }}>
          <Box
            className="follow-us"
            sx={{ textAlign: "start", marginLeft: { md: "30px", xs: "0px" } }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
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
                  textDecoration: "underline",
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
                  textDecoration: "underline",
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
            display: { xs: "block", md: "flex" },
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
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19.2px",
              mt: { md: 0, xs: 4 },
            }}
          >
            Privacy Policy - Terms & Conditions
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
