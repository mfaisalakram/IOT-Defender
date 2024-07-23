import React, { useEffect } from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";
import TickGreenIcon from "../../assets/svgs/tick_green_icon";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import { Box } from "@mui/material";
import "./MembershipPlan.css";

export const MembershipPlan = () => {
  const MembershipData = [
    {
      id: 1,
      title: "Free",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "5000 API Calls",
        },
        {
          title: "10 Sensors per device",
        },
        {
          title: "1 Device",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Silver",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "25,000 API Calls",
        },
        {
          title: "10 Devices",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Gold",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "50,000 API Calls",
        },
        {
          title: "25 Devices",
        },
        {
          title: "10 Sensors per device",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 4,
      title: "Platinum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "100,000 API Calls",
        },
        {
          title: "50 Devices",
        },
        {
          title: "10 Sensors per device",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 5,
      title: "Enterprise",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "1,000,000+ API Calls",
        },
        {
          title: "10 Sensors per device",
        },
        {
          title: "100 Devices",
        },
      ],
      buttonText: "Get Started",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      direction: "horizontal",
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="MembershipPlan" id="Membership">
      <div className="global-container">
        <div className="head-content">
          <div className="heading-container">
            <DotIcon />
            <h3 className="heading">Membership Plans</h3>
          </div>
        </div>

        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {MembershipData?.map((item, index) => (
              <div key={index} className="swiper-slide">
                <div className="global-block-wrapper_top">
                  <div className="global-block_top">
                    <div className="card-outer">
                      <div className="card-inner">
                        <div className="card-brand">
                          <div className="title">{item?.title}</div>
                          <div className="description">{item?.description}</div>
                          <div className="price-container">
                            <span className="currency">{item?.currency}</span>
                            <span className="price">{item?.price}</span>
                            <span className="period">/{item?.period}</span>
                          </div>
                        </div>
                        <div className="card-bottom">
                          <div className="item-list-container">
                            {item?.items?.map((item, index) => (
                              <div className="single-item" key={index}>
                                <TickGreenIcon />
                                <div className="title">{item?.title}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="button-container">
                          <button className="button_primary get-started-button">
                            {item?.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            marginRight: "190px",
            cursor: "pointer",
            mt: 3,
          }}
        >
          <img
            style={{ height: "50px", width: "50px", marginRight: "20px" }}
            className="arrow-left arrow"
            src="/assets/backto1.png"
            alt="back arrow"
          />
          <img
            className="arrow-right arrow"
            src="/assets/nextto1.png"
            alt="back arrow"
          />
        </Box>
      </div>
    </div>
  );
};
