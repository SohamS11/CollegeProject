import React, { useEffect, useState } from "react";
import FacebookIcon from "../../assets/social-icon/facebook-icon.svg";
import instagramIcon from "../../assets/social-icon/instagram-icon.svg";
import linkdenIcon from "../../assets/social-icon/linkedin-icon.svg";
import twitterIcon from "../../assets/social-icon/twitter-icon.svg";
import githubIcon from "../../assets/social-icon/github-icon.svg";
import FooterData from "../../Data/FooterData";
import { useParams, useNavigate } from "react-router-dom";

const Footer = () => {
  const [itemNumber, setItemNumber] = useState(5);

  useEffect(() => {
    function Getsizewindows() {
      if (window.innerWidth <= 640) {
        setItemNumber(3);
      } else {
        setItemNumber(5);
      }
    }
    window.addEventListener("resize", Getsizewindows);
    Getsizewindows();
  }, []);
  return (
    <div className="bg-[#f4f4f4] p-5">
      <div className=" flex justify-around">
        {FooterData.slice(0, itemNumber).map((item, index) => {
          return <FooterItem data={item} key={index} />;
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
        <div className="w-full mt-5 h-0.5 bg-black opacity-25 "> </div>
        <div className="flex flex-col items-center mt-10 ">
          <div className=" text-black opacity-60 font-bold">
            Contact With Us
          </div>
          <div className="flex flex-row space-x-4 mt-2 pb-10">
            <a href="https://www.facebook.com/">
              <img
                src={FacebookIcon}
                className="hover:cursor-pointer"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <img
                src={instagramIcon}
                className="hover:cursor-pointer"
                alt="Instagram"
              />
            </a>
            <a href="https://in.linkedin.com/">
              <img
                src={linkdenIcon}
                width="25px"
                height="25px"
                className="hover:cursor-pointer"
                alt="LinkedIn"
              />
            </a>
            <a href="https://twitter.com/i/flow/login">
              {" "}
              <img
                src={twitterIcon}
                className="hover:cursor-pointer"
                alt="Twitter"
              />
            </a>
            <a href="https://github.com/login">
              <img
                src={githubIcon}
                className="hover:cursor-pointer"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-0.5 bg-black opacity-25 "> </div>
        <div>© 2024 MY COLLEGE Web Pvt. Ltd. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;

const FooterItem = ({ data }) => {
  const navigate = useNavigate();

  function RouteHandle(routename) {
    if (data.id === "top-exam") {
      navigate(`/exam/${encodeURIComponent(routename)}`);
    } else {
      navigate(`/collegelist/${encodeURIComponent(routename)}`);
    }
  }
  return (
    <>
      <div className="mt-5">
        <h2 className="font-bold">{data.title}</h2>
        <ul className="mt-2">
          {data.subMenu.map((item, index) => {
            return (
              <li key={index} className=" cursor-pointer">
                <a onClick={() => RouteHandle(item.id)}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
