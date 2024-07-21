import React from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";
import TickGreenIcon from "../../assets/svgs/tick_green_icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./MembershipPlan.css";
import { Box } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

export const MembershipPlan = () => {
  const MembershipData = [
    {
      id: 1,
      title: "Basic",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Copper",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Silver",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 4,
      title: "Gold",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 5,
      title: "Gold",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
    {
      id: 6,
      title: "Gold",
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
          title: "Unlimited Bandwidth",
        },
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="MembershipPlan">
      <div style={{ marginLeft: "350px" }}>
        <div className="head-content">
          <div className="heading-container">
            <DotIcon />
            <h3 className="heading">Membership Plans</h3>
          </div>
        </div>

        <div className="swiper-container">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // loop={true}
            watchOverflow={false}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {MembershipData?.map((item, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
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
