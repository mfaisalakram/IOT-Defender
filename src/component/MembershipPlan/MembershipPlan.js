import React, { useEffect } from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";
import TickGreenIcon from "../../assets/svgs/tick_green_icon";
import TickBlackIconMemberShip from "../../assets/svgs/tick_black_icon_membership";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import { Box } from "@mui/material";
import "./MembershipPlan.css";

export const MembershipPlan = () => {
  const MembershipData = [
    {
      id: 1,
      title: "Free",
      description:
        "Get started for free with up to 5000 API calls! Suitable for Students & Enthusiasts.",
      type: "Non Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "5000 API Calls",
        },
        {
          title: "1 Device",
        },
        {
          title: "10 Sensors",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Silver",
      description:
        "Add up to 10 devices at 10 sensors each with 25,000 API calls. Suitable for Small Corporations.",
      type: "Non Popular",
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
        {
          title: "100 Sensors",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Gold",
      description:
        "Add up to 25 devices at 10 sensors each with 50,000 API calls. Suitable for Medium-sized Corporations.",
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
          title: "250 Sensors",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 4,
      title: "Platinum",
      description:
        "Add up to 50 devices at 10 sensors each with 100,000 API calls. Suitable for Large Industries.",
      type: "Non Popular",
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
          title: "500 Sensors",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 5,
      title: "Enterprise",
      description:
        "Add up to 100+ Devices at 10 sensors each with 1,000,000+ API calls. Suitable for Large Industries.",
      type: "Non Popular",
      currency: "$",
      price: 0,
      period: "month",
      items: [
        {
          title: "1,000,000+ API Calls",
        },
        {
          title: "100+ Devices",
        },
        {
          title: "1000+ Sensors",
        },
      ],
      buttonText: "Get Started",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".mySwiper2", {
      // loop: true,
      breakpoints: {
        1800: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
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
      <div className="customContainer">
        <div className="head-content">
          <div className="heading-container">
            <DotIcon />
            <h3 className="heading">Membership Plans</h3>
          </div>
          <p>
            Unlock seamless IoT data integration with our blockchain-secured
            model. Experience unmatched reliability, security, and efficiency.
            Choose the perfect plan to power your connected future with
            confidence and control.
          </p>
        </div>

        <div className="swiper mySwiper2">
          <div className="swiper-wrapper">
            {MembershipData?.map((item, index) => (
              <div
                key={index}
                className={`swiper-slide ${
                  item?.type === "Popular" ? "popular" : ""
                }`}
              >
                <div className="global-block-wrapper_top">
                  <div className="global-block_top">
                    <div className="card-outer">
                      <div className="card-inner">
                        <div className="card-brand">
                          <div className="mainHead">
                            <div className="title">{item?.title}</div>
                            {item?.type === "Popular" ? (
                              <div className="type">{item?.type}</div>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="description">{item?.description}</div>
                          <div className="price-container">
                            <span className="currency">{item?.currency}</span>
                            <span className="price">{item?.price}</span>
                            <span className="period">/{item?.period}</span>
                          </div>
                        </div>
                        <div className="card-bottom">
                          <div className="item-list-container">
                            {item?.items?.map((el, index) => (
                              <div className="single-item" key={index}>
                                {item?.type === "Popular" ? (
                                  <div>
                                    <TickBlackIconMemberShip />
                                  </div>
                                ) : (
                                  <div>
                                    <TickGreenIcon />
                                  </div>
                                )}

                                <div className="title">{el?.title}</div>
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
        </div>
      </div>
      <div className="global-container">
        <Box
          sx={{
            marginTop: "20px",
            height: "fit-content",
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", lg: "end" },
            gap: "30px",
            marginTop: "50px",
            paddingRight: "10px",
          }}
        >
          <div class="swiper-button-prev">
            <img
              style={{ height: "45px", width: "45px", marginRight: "20px" }}
              className="arrow-left arrow"
              src="/assets/backto1.png"
              alt="back arrow"
            />
          </div>
          <div class="swiper-button-next">
            <img
              style={{ height: "45px", width: "45px", marginRight: "20px" }}
              className="arrow-right arro"
              src="/assets/nextto1.png"
              alt="back arrow"
            />
          </div>
        </Box>
      </div>
    </div>
  );
};
