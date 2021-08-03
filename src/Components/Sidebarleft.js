import React from "react";
import "./Sidebarleft.css";
import { FiGrid } from "react-icons/fi";
import { VscBriefcase } from "react-icons/vsc";
import { MdSecurity } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

function Sidebarleft() {
  return (
    <div className="sidebarleftvertical">
      <div className="sidebarleft">
        <div className="logoname">
          <div className="logo">
            <img src="logo_mysite.PNG"></img>
          </div>
          <h3 class="header__heading">MYSITE</h3>
        </div>
        <div className="headerbottom">
          <div className="firsticon">
            <FiGrid />
            <p> &nbsp;&nbsp;&nbsp;Projects</p>
          </div>
          <div className="secondicon">
            <VscBriefcase />
            <p> &nbsp;&nbsp;&nbsp; Organsiation Profile</p>
          </div>
          <div className="thirdicon">
            <MdSecurity />
            <p> &nbsp;&nbsp;&nbsp; Access Control</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebarleft;
