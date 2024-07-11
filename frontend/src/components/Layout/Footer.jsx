import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Manu Jain.</div>
      <div>
        <Link to={"https://www.geeksforgeeks.org/user/21btcfcwh/"} target="_blank">
        <SiGeeksforgeeks />
        </Link>
        <Link to={"https://leetcode.com/u/21btc135/"} target="_blank">
        <SiLeetcode />
        </Link>
        <Link to={"https://www.linkedin.com/in/manu-jain-018baa244/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Manu-jain-07"} target="_blank">
        <FaGithub />
        </Link>
      </div>
    </footer>  
  );
};

export default Footer;