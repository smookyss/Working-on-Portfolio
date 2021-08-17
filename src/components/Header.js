import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h2>web development and website promotions</h2>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "web Development",
            "Facebook Ads",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
