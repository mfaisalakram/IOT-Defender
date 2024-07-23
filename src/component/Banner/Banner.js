import React from "react";

import banner_gif from "../../assets/gif/banner-gif.gif";

import "./Banner.css";

export const Banner = () => {
  return (
    <div className="Banner">
      <div className="global-container">
        <div className="row conttt">
          <div className="brand-content col-sm-12 col-md-12 col-lg-6">
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
          <div className="gif-container mt-4">
            <img src={banner_gif} />
          </div>
        </div>
      </div>
    </div>
  );
};
