import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IOT_mobile_logo from "../../../assets/svgs/IOT_mobile_logo";
import LinkedInSvg from "../../../assets/svgs/linkedIn";
import TwitterSvg from "../../../assets/svgs/twitter";
import { Wolfberryllc } from "../../../assets/svgs/wolfberryllc";
import MenuSvg from "../../../assets/svgs/menuSvg";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Data Security" },
    { text: "Process" },
    { text: "Features" },
    { text: "Membership" },
    { text: "FAQ" },
    { text: "Book a demo" },
  ];

  return (
    <Box
      className="global-container n-auto"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "154px",
      }}
    >
      <Box
        className="logo"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        <img src="/assets/logo.png" alt="" width="200px" />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flex: 2,
        }}
      >
        {menuItems.slice(0, -1).map((item, index) => (
          <Typography key={index} sx={{ fontSize: "18px", fontWeight: "700" }}>
            {item.text}
          </Typography>
        ))}
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
          {menuItems[menuItems.length - 1].text}
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            color: "white",
            outline: "none", // Removes the focus outline
            border: "none", // Removes any default border
            "&:focus": {
              outline: "none", // Removes the focus outline when the button is focused
            },
            "&:active": {
              border: "none", // Ensures no border is applied when the button is active
            },
          }}
        >
          <MenuSvg />
          {/* <MenuIcon /> */}
        </IconButton>
      </Box>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100%",
            background: "#0C0919",
            boxSizing: "border-box", // Ensure the drawer content does not overflow
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "#0C0919",
            color: "white",
          }}
        >
          <IOT_mobile_logo style={{ height: "40px" }} />
          <IconButton
            sx={{
              color: "white",
              "& focus": {
                borderRadius: "none",
              },
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={toggleDrawer(false)}
              sx={{ color: "white" }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
            paddingInline: 2,
          }}
        >
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
              width: "100%",
              lineHeight: "21.78px",
            }}
            variant="contained"
          >
            Book a demo
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Divider
            sx={{
              width: "80%",
              borderColor: "white",
              mt: 4,
              mb: 6,
              paddingInline: 2,
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
            color: "white",
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
      </Drawer>
    </Box>
  );
};

export default Header;
