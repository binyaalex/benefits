import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";

import GrayIcon from "./GrayIcon";
import widgetHelper from "../../helpers/widget";

import "./Footer.css";
import chatIcon from "../../assets/images/footer/chat.png";

const containerArr = [
  {
    img: <FiHome />,
    link: "/",
    title: "ראשי",
  },
  {
    img: <AiOutlineTags />,
    link: "/unusedbenefits",
    title: "טרם מומשו",
  },
  // {
  //   img: <DinnerDiningOutlinedIcon />,
  //   link: "",
  //   title: "מסעדות",
  // },
  {
    img: <BsWallet2 />,
    link: "/wallet",
    title: "ארנק",
  },
];

const Footer = () => {
  const location = useLocation();
  const [url, setUrl] = useState();

  useEffect(() => {
    console.log(`You changed the page to: ${location.pathname}`);
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      {/* <BrowserView>
        <div className="webFooter">
          <div className="customizer border-left-blue-grey border-left-lighten-4">
            <div className="customizer-toggle box-shadow-3">
              {containerArr.map((el, i) => {
                return (
                  <Link to={el.link} key={i}>
                    {el.img}
                  </Link>
                );
              })}

              <Link to="#">
                <IoIosChatbubbles />
              </Link>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView> */}
      <div>
        <footer className="footer">
          <div className="sosAndGray">
            <div className="grayIcons">
              {containerArr.map((el, i) => {
                return (
                  <GrayIcon
                    img={el.img}
                    i={i}
                    url={url}
                    key={i}
                    link={el.link}
                    title={el.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mainChat" onClick={() => widgetHelper.open()}>
            <img alt="" className="chat" src={chatIcon} />
            <div className="grayIconTitle white">צ'ט</div>

          </div>
        </footer>
      </div>
      {/* </MobileView> */}
    </>
  );
};

export default Footer;
