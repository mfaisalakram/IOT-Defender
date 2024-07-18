import React from "react";

import banner_gif from "../../assets/gif/banner-gif.gif";

import "./Banner.css";

export const Banner = () => {
  return (
    <div className="Banner">
      <div className="global-container">
        <div className="brand-content">
          <h1 className="banner-heading">Revolutionize IoT Data Security</h1>
          <p className="banner-text">
            <span className="highlight-text">Empower your</span> IoT solutions
            <span className="highlight-text">with decentralized</span>{" "}
            blockchain security. Transparent,{" "}
            <span className="highlight-text">Immutable, and</span>Scalable.
          </p>
          <div className="button-block">
            <button className="book-demo-button button_primary">
              Book a demo
            </button>
            <button className="learn-more-button button_secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="gif-container">
          <img src={banner_gif} />
        </div>
      </div>
    </div>
  );
};
