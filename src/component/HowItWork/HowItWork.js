import React from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";
import { CodeIcon } from "../../assets/svgs/code_icon";
import { MintIcon } from "../../assets/svgs/mint_icon";
import { MonitorIcon } from "../../assets/svgs/monitor_icon";
import { TempringIcon } from "../../assets/svgs/tampering_icon";

import "./HowItWork.css";
import { RightArrowIcon } from "../../assets/svgs/right_arrow_icon";

export const HowItWork = () => {
  const GuidList = [
    {
      id: "01",
      icon: <CodeIcon />,
      title: "Get your API Key",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: "02",
      icon: <MintIcon />,
      title: "Mint your IoT Data",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: "03",
      icon: <MonitorIcon />,
      title: "Monitor Performance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: "04",
      icon: <TempringIcon />,
      title: "No Data Tampering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  return (
    <div className="HowItWork">
      <div className="global-container">
        <div className="head-content">
          <div className="heading-container">
            <DotIcon />
            <h3 className="heading">How it works </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="card_container">
          {GuidList?.map((item, index) => {
            return (
              <div className="global-block-wrapper_top">
                <div className="card_outer global-block_top">
                  <div className="arrow-icon-container">
                    <RightArrowIcon />
                  </div>
                  {item?.id}
                  <div className="card_inner">
                    <div className="icon">{item?.icon}</div>
                    <div className="title">{item?.title}</div>
                    <div className="description"> {item?.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="button-container">
          <button className="button_primary book-demo-button">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};
