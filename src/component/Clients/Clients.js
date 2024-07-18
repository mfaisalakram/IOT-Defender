import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

import amazone from "../../assets/client_logos/amazone.png";
import frame from "../../assets/client_logos/frame.png";
import google_cloud from "../../assets/client_logos/google-cloud.png";
import hyperledger from "../../assets/client_logos/hyperledger.png";
import microsoft_azure from "../../assets/client_logos/microsoft-azure.png";
import s_software from "../../assets/client_logos/s-software.png";

import "./Clients.css";

export const Clients = () => {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      autoplay: {
        delay: 1500,
      },
      loop: true,
      spaceBetween: 10,
    });
  }, []);
  return (
    <div className="Clients">
      <div classNameName="global-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={hyperledger} />
            </div>
            <div className="swiper-slide">
              <img src={s_software} />
            </div>
            <div className="swiper-slide">
              <img src={amazone} />
            </div>
            <div className="swiper-slide">
              <img src={microsoft_azure} />
            </div>
            <div className="swiper-slide">
              <img src={google_cloud} />
            </div>
            <div className="swiper-slide">
              <img src={frame} />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};
