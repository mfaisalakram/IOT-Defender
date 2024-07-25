import React from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";
import { CodeIcon } from "../../assets/svgs/code_icon";
import { MintIcon } from "../../assets/svgs/mint_icon";
import { MonitorIcon } from "../../assets/svgs/monitor_icon";
import { TempringIcon } from "../../assets/svgs/tampering_icon";
import { RightArrowIcon } from "../../assets/svgs/right_arrow_icon";

import "./HowItWork.css";

export const HowItWork = () => {
  const GuidList = [
    {
      id: "01",
      icon: <CodeIcon />,
      title: "Setup devices & sensors",
      description:
        "After signing up for a subscription plan, Initialize your device and add sensor names in the dashboard. ",
    },
    {
      id: "02",
      icon: <MintIcon />,
      title: "Heading: Get API Key",
      description: "Use this API Secret Key for making authorized API calls. ",
    },
    {
      id: "03",
      icon: <MonitorIcon />,
      title: "Heading: Get API Code",
      description:
        "Copy and use your JSON formatted API code from IoT defender Scratch-Pad request section. ",
    },
    {
      id: "04",
      icon: <TempringIcon />,
      title: "Heading: Mint & Retrieve your Data",
      description:
        "Use IoT defender APIs in your software for uploading IoT generated values. ",
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
            IoT Defender provides easily onboarding process. Select your desired
            subscription plan after which set up your device(s), you will also
            receive an API Security token key, set up your device(s), and mint
            data onto the IoT Defender network blockchain via API calls. You can
            easily retrieve this data with further API calls, ensuring secure,
            immutable, and accessible IoT data management.
          </p>
        </div>

        <div className="card_container">
          {GuidList?.map((item, index) => {
            return (
              <div className="card_single">
                <div className="card_outer">
                  <div className="arrow-icon-container">
                    <RightArrowIcon />
                  </div>
                  <div className="item-id">{item?.id}</div>
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
