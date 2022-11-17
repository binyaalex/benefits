import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";

import Header from "../header/Header";

import hotBenefit1 from "../../assets/images/hotBenefit1.png";
import lmLogo from "../../assets/images/lm.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../wallets/paymentHistory.css";

function PaymentHistory() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const history = [
    {
      image: lmLogo,
      name: "שי לכבוד חג הפסח",
      detail: "11.12.2021 16:05",
      price: "150",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: lmLogo,
      name: "שי לכבוד חג חנוכה",
      detail: "11.12.2021 16:05",
      price: "50",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: lmLogo,
      name: "שי לכבוד ראש השנה",
      detail: "11.12.2021 16:05",
      price: "200",
      type: "card",
      cardno: "**** *****",
    },
    // {
    //   image: hotBenefit1,
    //   name: "עידן אלתרמן",
    //   detail: "11.12.2021 16:05",
    //   price: "50",
    //   type: "card",
    //   cardno: "**** *****",
    // },
    // {
    //   image: Mastercard,
    //   name: t("purchases"),
    //   detail: "11.12.2021 16:05",
    //   price: "495",
    //   type: "card",
    //   cardno: "**** *****",
    // },
    // {
    //   image: Footlocker,
    //   name: t("cardre"),
    //   detail: "11.12.2021 16:05",
    //   price: "105",
    //   type: "all",
    // },
    // {
    //   image: Visa,
    //   name: t("purchases"),
    //   detail: "11.12.2021 16:05",
    //   price: "729",
    //   type: "card",
    //   cardno: "**** *****",
    // },
    // {
    //   image: FoxHome,
    //   name: t("cardre"),
    //   detail: "11.12.2021 16:05",
    //   price: "800",
    //   type: "all",
    // },
  ];

  return (
    <div>
      <Header isFull={true} />
      <div className="paymentHestoryTemplate">
        <div className="container">
          <div className="templateHeading">
            <span
              className="backIcon isLink"
              onClick={() => {
                navigate("/wallet");
              }}
            >
              <ArrowForwardIosIcon />
            </span>
            <h1 className="templateTitle">יתרת ארנק</h1>
          </div>
          <ul className="paymentHestoryCards">
            {history.length > 0 &&
              history.map((item, i) => {
                return (
                  <li
                    className="cartProduct-Module__list"
                    key={i}
                    onClick={() => {
                      navigate("/paymentcardhistory");
                    }}
                  >
                    <div className="cartProduct-box">
                      <div
                        className="cartProduct-box__img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="cartProduct-box__info">
                        <h5 className="cartProduct-box__name">{item.detail}</h5>
                        {/* {item.type === "card" && <h5>{item.cardno}</h5>} */}
                      </div>
                    </div>
                    <h6 className="cartProduct-box__brand">{item.name}</h6>
                    <div className="cartProduct-rightBlock">
                      <div className="cartProduct-box__brandBox">
                        <span className="cartProduct-box__price">
                          {item?.price || 0}₪
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
