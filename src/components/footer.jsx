import React, { useState } from "react";
import SocialSidebar from "./SocialSidebar";
function Footer(params) {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver(params) {
    setMouseOver(true);
  }
  function handleMouseOut(params) {
    setMouseOver(false);
  }
  const customStyle = {
    color: "#ff4c60",
  };

  return (
    <div id="CONTACTS" className="footer text-white text-center">
      <a className="circle" href="#HOME">
        <i
          style={isMouseOver ? customStyle : null}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="icircle fas fa-chevron-circle-up fa-3x"
        ></i>
      </a>
      <SocialSidebar customClass="footersidebar" />
      <div className="m-0 p-0 py-3">
        <p className="m-0 p-0">Made by Atif Hussain</p>
      </div>
    </div>
  );
}

export default Footer;
