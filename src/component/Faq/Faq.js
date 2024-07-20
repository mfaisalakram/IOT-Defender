import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { DotIcon } from "../../assets/svgs/dot_icon";
import "./Faq.css";

export const Faq = () => {
  const faqData = [
    {
      question: "What is IoT Defender?",
      answer:
        "IoT Defender is a comprehensive cybersecurity platform designed to protect Internet of Things (IoT) devices from a wide range of threats. It offers solutions for monitoring, detecting, and mitigating security risks to ensure your connected devices and the data they collect remain secure.",
    },
    {
      question: "Why do I need IoT Defender for my IoT devices?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How does IoT Defender protect my devices?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What types of IoT devices does IoT Defender support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Is IoT Defender difficult to set up?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  const [allExpanded, setAllExpanded] = useState(false);
  const [expandedPanels, setExpandedPanels] = useState([0]); // Open the first accordion by default

  const handleExpandAll = () => {
    setAllExpanded((prev) => !prev);
    setExpandedPanels(allExpanded ? [] : faqData.map((_, index) => index));
  };

  const handleToggle = (index) => {
    setExpandedPanels((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <Box className={"global-container"}
      sx={{
        // maxWidth: { xs: "1400px !important", md: "1001px" },
        padding: "20px",
        margin: "auto",
        overflow: "hidden", // Ensures content does not overflow
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <DotIcon />

        <Typography
          className="main-heading"
          sx={{ fontSize: { xs: "24px", md: "40px" }, marginLeft: 1, fontWeight: "700" }}
        >
          FAQ
        </Typography>
      </Box>
      <Box>
        {faqData.map((item, index) => (
          <Accordion
            sx={{ background: "#0c0919", borderRadius: "20px", mb: 2, p: 1 }}
            key={index}
            expanded={expandedPanels.includes(index)}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  height="30px"
                  width="30px"
                  sx={{ color: "white", fontSize: "30px" }}
                />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              onClick={() => handleToggle(index)}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "18px", md: "24px" },
                  lineHeight: "28.8px",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ color: "white", fontSize: { xs: "16px", md: "20px" }, textAlign: "start" }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          sx={{
            marginBlock: 6,
            backgroundColor: "#9595B2",
            "&:hover": {
              backgroundColor: "#9595B2",
              color: "#ffffff",
            },
            "&:focus": {
              outline: "none",
            },
            color: "#ffffff",
            borderRadius: "100px",
            fontSize: "18px",
            lineHeight: "21.78px",
            fontWeight: "700",
            padding: "10px",
            width: "167.1px",
            height: "46px",
          }}
          onClick={handleExpandAll}
        >
          {allExpanded ? "View All" : "View All"}
        </Button>
      </Box>
    </Box>
  );
};
