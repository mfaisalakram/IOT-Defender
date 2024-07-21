import React, { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { DotIcon } from "../../assets/svgs/dot_icon";
import { Wolfberryllc } from "../../assets/svgs/wolfberryllc";
import TwitterSvg from "../../assets/svgs/twitter";
import LinkedInSvg from "../../assets/svgs/linkedIn";
import "./GetInTouch.css";

export const GetInTouch = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    telephone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <Box sx={{ background: "#0c0919" }}>
      <Box className="global-container" sx={{paddingBlock:"80px"}}>
        <Grid container spacing={4} justifyContent="start" textAlign={"start"}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                mb: 4,
              }}
            >
              <DotIcon />
              <Typography
                className="main-heading"
                sx={{ fontSize: "40px", marginLeft: 1, fontWeight: "700" }}
              >
                Get in touch
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24px",
                mb: 4,
              }}
            >
              Our team specializes in custom development services and private
              off-chain solutions, including AI integration and automation, both
              on and away from the cloud. We're ready to support your needs
              contact us to get started!
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                // alignItems: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Wolfberryllc />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  support@wolfberryllc.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <TwitterSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  iotdefender
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <LinkedInSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  iotdefender
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background: "#0A162F",
                p: 3,
                color: "white",
                borderRadius: "20px",
                maxWidth: "882px",
                maxHeight: "493px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{ display: "flex", flexDirection: "row", marginBlock: 3 }}
                >
                  <TextField
                    InputLabelProps={{ style: { color: "#82868F" } }}
                    InputProps={{
                      disableUnderline: true,
                      color: "white",
                      style: {
                        color: "white",
                        background: "#040D1F",
                        borderRadius: "10px",
                      },
                    }}
                    variant="filled"
                    name="name"
                    label="Name"
                    fullWidth
                    value={formValues.name}
                    onChange={handleChange}
                    sx={{ mr: 2 }}
                  />
                  <TextField
                    InputLabelProps={{ style: { color: "#82868F" } }}
                    InputProps={{
                      disableUnderline: true,
                      color: "white",
                      style: {
                        color: "white",
                        background: "#040D1F",
                        borderRadius: "10px",
                      },
                    }}
                    variant="filled"
                    name="email"
                    label="Email"
                    fullWidth
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <TextField
                    borderRadius={"50px"}
                    InputLabelProps={{ style: { color: "#82868F" } }}
                    InputProps={{
                      disableUnderline: true,
                      color: "white",
                      style: {
                        color: "white",
                        background: "#040D1F",
                        borderRadius: "10px",
                        width: "775px !important",
                      },
                    }}
                    name="telephone"
                    label="Telephone"
                    variant="filled"
                    fullWidth
                    value={formValues.telephone}
                    onChange={handleChange}
                    sx={{
                      mr: 2,
                      width: "775px !important",
                      marginRight: "0px !important",
                    }}
                  />
                </Box>
                <Box sx={{ marginBlock: 3, borderRadius: "10px" }}>
                  <TextField
                    InputLabelProps={{ style: { color: "#82868F" } }}
                    InputProps={{
                      disableUnderline: true,
                      color: "white",
                      style: {
                        color: "white",
                        background: "#040D1F",
                        borderRadius: "10px",
                      },
                    }}
                    name="description"
                    label="Tell us a little about what you’re looking for..."
                    variant="filled"
                    fullWidth
                    multiline
                    rows={5}
                    value={formValues.description}
                    onChange={handleChange}
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                  <Button
                    type="submit"
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: "700",
                      lineHeight: "21.78px",
                      color: "black",
                      background: "#C9E265",
                      borderRadius: "100px",
                      "&:hover": {
                        backgroundColor: "#C9E265",
                        color: "black",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                      width: { xs: "168px", md: "187px" },
                      height: { xs: "40px", md: "46px" },
                    }}
                    variant="contained"
                  >
                    Send message
                  </Button>
                </Box>
              </form>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Wolfberryllc />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  support@wolfberryllc.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <TwitterSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  iotdefender
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <LinkedInSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  iotdefender
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
