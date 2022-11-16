import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import Header from "../header/Header";

import "./PaymentApprove.css";

import qr from '../../assets/images/qr.jpg'

export default function PaymentApprove({ newMoney }) {
  const navigate = useNavigate();
  const { t } = useTranslation();


  return (
    <div>
      <Header />
      <div className="loadMoneyTemplate">
        <div className="container">
          <div className="templateHeading">
            <h1 className="templateTitle">{t("payment approve")}</h1>
          </div>
          <div className="paymentApproveContent">
            <div className="paymentApproveText">
              <div className="paymentApproveLine1">{t("charged in")}₪{newMoney}</div>
              <div className="paymentApproveLine2">{t("show to the waiter")}</div>
              <div className="paymentApproveLine3">{t("waiter, make a transaction")}</div>
            </div>
            <div className="paymentApproveQr">
              <img src={qr} />
            </div>
            <div className="paymentApproveCode">
              <div>{t("transaction code: ")}<strong>7517</strong></div>
            </div>
            <div className="loadMoneyCard-btn">
              <Button
                className="blueBtn"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("end")}
              </Button>
              <Button
                className="blueBtn gift"
                onClick={() => {
                  navigate("/");
                }}
              >
                שתף כמתנה
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
