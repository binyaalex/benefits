import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { NumericKeyboard } from 'react-numeric-keyboard';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Header from "../header/Header";
import { GiTwoCoins } from "react-icons/gi";

import "../wallets/BusinessPayment.css";

export default function BusinessPayment({ credit = false, newMoney, setNewMoney }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.user);
  const [money, setMoney] = useState(0.0); // eslint-disable-line
  // const [newMoney, setNewMoney] = useState(0);
  const [amountToPay, setAmountToPay] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);

  const onKey = ({ value, name }) => {
    // const value = parseFloat(e.currentTarget.value) || 0;
    console.log(value ? 'y' : 'n');
    // if (value > 0) {
    setAmountToPay(value ? parseInt(value) : 0)
    setNewMoney(value ? Math.floor(value * 0.88) : 0);
    // setMoney((user[credit ? "credit" : "money"] || 0) + value);
    // }
  };

  // const onChange = (e) => {
  //   const value = parseFloat(e.currentTarget.value) || 0;
  //   console.log(value);
  //   if (value >= 0) {
  //     setAmountToPay(value)
  //     setNewMoney(value * 0.875);
  //     setMoney((user[credit ? "credit" : "money"] || 0) + value);
  //   }

  // };

  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <div>
      <Header isFull={false} />
      <div className="loadMoneyTemplate">
        <div className="container">
          <div className="templateHeading">
            <h1 className="templateTitle">{t("payment at the business")}</h1>
            <span
              className="backIcon isLink"
              onClick={() => {
                navigate("/wallet");
              }}
            >
              <ArrowForwardIosIcon />
            </span>
          </div>
          <div className="loadMoneyCard">
            <div className="loadMoneyCard-price">
              {/* <input
                ref={inputElement}
                type="number"
                step="1"
                min="0.00"
              onChange={onChange}
              /> */}
              <h1 ref={inputElement}
              >
                {amountToPay}
              </h1>
            </div>
            <div className="arrowWrapper">
              <ArrowDownwardIcon className="arrow" />

            </div>
            <h3 className="loadMoneyCard-text">
              {t("payment amount after take")}{" "}
              {/* {amountToPay.toFixed(0) - newMoney?.toFixed(0) || 0} */}
              {/* {amountToPay - newMoney || 0} */}
              {/* <GiTwoCoins /> */}
              {/* {t("shuk coins")} */}

            </h3>
            <h1 className="loadMoneyCard-price">{newMoney?.toFixed(0) || 0}</h1>
            {/* <h1 className="loadMoneyCard-price">{newMoney || 0}</h1> */}
            <div className="key">
              <NumericKeyboard
                backSpaceIcon={<BackspaceIcon fontSizeSmall />}
                leftIcon
                isOpen={true}
                onChange={onKey}
                containerClassName="key"
              />
            </div>
            <div className="loadMoneyCard-btn">
              <Button
                className="blueBtn"
                onClick={() => {
                  // dispatch(addMoney(newMoney, credit));
                  navigate("/paymentapprove");
                }}
              >
                {t("pay")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
