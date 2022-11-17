import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StoreIcon from "@mui/icons-material/Store";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Header from "../header/Header";
import CouponList from "./couponList/CouponList";
import { sendMoney } from "../../redux/actions-exporter";

import "../wallets/wallets.css";

export default function Wallets({setVendors}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.user);
  const sendMoneyError = useSelector((state) => state.user.sendMoneyError);
  const [amountType, setAmountType] = useState("money");
  const [amount, setAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");

  // useEffect(() => {
  //   if (!user?.id) return navigate("/login");
  // if (!user?.result?.id) {
  //   if (window?.B24Chat?.instance) {
  //     const instance = window?.B24Chat?.instance;
  //     instance.login();
  //     return;
  //   } else {
  //     return navigate("/");
  //   }
  // }
  //   setMaxAmount(user?.money || 0);
  // }, [user, navigate]);

  const onSend = () => {
    dispatch(
      sendMoney(
        {
          amountType,
          amount,
          email,
          purpose,
        },
        () => toast.success("Money has been successfully sent"),
        () => toast.error(sendMoneyError.response.data.message)
      )
    );
  };

  return (
    <div>
      <Header isFull={true} />
      <div className="walletTamplate">
        <div className="container">
          <div className="walletIcons">
            {/* <div
              className="walletIconsBox isLink"
              onClick={() => {
                navigate("/loadmoney");
              }}
            >
              <LocalAtmIcon />
              <h6 className="walletIconsBox-title">{t("loadMoney")}</h6>
            </div> */}
            {/* <div
              className="walletIconsBox isLink"
              // onClick={() => {
              //   navigate("/loadmoney");
              // }}
            >
              <FaShoppingCart />
              <h6 className="walletIconsBox-title">{t("pay at mck")}</h6>
            </div> */}
            {/* <div
              className="walletIconsBox isLink"
              onClick={() => {
                navigate("/loadcredit");
              }}
            >
              <LocalAtmIcon />
              <h6 className="walletIconsBox-title">{t("Load E-Credit")}</h6>
            </div> */}
            <div
              className="walletIconsBox isLink"
              style={{margin: '0 50px'}}
              onClick={() => {
                navigate("/paymenthistory");
              }}
            >
              <FaWallet />
              <h6 className="walletIconsBox-title">יתרת ארנק</h6>
            </div>
            {/* <div
              className="walletIconsBox isLink"
              style={{margin: '0 50px'}}
              onClick={() => {
                navigate("/businesspayment");
              }}
            >
              <PaymentIcon />
              <h6 className="walletIconsBox-title">
                {t("pay at the buisness")}
              </h6>
            </div> */}
            <div
              className="walletIconsBox isLink"
              onClick={() => {
                setVendors('כל המסעדות')
                navigate("/allvendors");
              }}
            >
              <IoIosRestaurant />
              <h6 className="walletIconsBox-title">{t("restaurants")}</h6>
            </div>
            <div
              className="walletIconsBox isLink"
              onClick={() => {
                setVendors('רשתות אופנה')
                navigate("/allvendors");
              }}
            >
              <GiClothes />
              <h6 className="walletIconsBox-title">{t("fashion")}</h6>
            </div>
          </div>

          <div className="walletBtns">
            <Button
              className="blueBtn"
              onClick={() => {
                navigate("/paymenthistory");
              }}
            >
              {t("paymentHistory")}
            </Button>
          </div>

          {/* <div className="moneyBlock">
            <div className="moneyBlock-heading">
              <h2 className="moneyBlock-title">{t("moneyBalances")}</h2>
              <h3 className="moneyBlock-price">
                {user?.money?.toFixed(1) || 0}₪/{user?.credit?.toFixed(1) || 0}{" "}
                e-credit
              </h3>
            </div>
            <div className="walletBtns">
              <Button onClick={() => setShow(true)} className="blueBtn">
                {t("moneyTransfer")}
              </Button>
            </div>
          </div> */}

          <div>
            {show ? (
              <div className="ContactUsModule">
                <h6 className="ContactUsModule-title"> {t("sendMoney")}</h6>
                <Select
                  labelId="amount-type"
                  id="amount-type"
                  name="select"
                  value={amountType}
                  label={t("Amount type")}
                  style={{ border: 0, direction: "ltr" }}
                  className="inputStyle inputStyle-select"
                  onChange={(e) => {
                    setAmountType(e.target.value);
                    setMaxAmount(user[e.target.value]);
                    setAmount(0);
                  }}
                >
                  <MenuItem value="money">{t("Money")}</MenuItem>
                  <MenuItem value="credit">{t("Credit")}</MenuItem>
                </Select>
                <TextField
                  required
                  id="Amount"
                  className="inputStyle"
                  name="Amount"
                  label={t("Amount")}
                  fullWidth
                  InputProps={{ inputProps: { min: 0, max: maxAmount } }}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  margin="dense"
                />
                <TextField
                  required
                  id="User"
                  name="User"
                  label={t("User email")}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputStyle"
                  fullWidth
                  margin="dense"
                />
                <TextField
                  required
                  id="Transfer purpose"
                  name="Transfer purpose"
                  label={t("Transfer purpose")}
                  onChange={(e) => setPurpose(e.target.value)}
                  type="text"
                  className="inputStyle"
                  fullWidth
                  margin="dense"
                />
                <div className="formBtn">
                  <Button onClick={() => setShow(false)} className="blueBtn">
                    {t("cancel")}
                  </Button>
                  <Button onClick={onSend} className="blueBtn">
                    {" "}
                    {t("send")}
                  </Button>
                </div>
              </div>
            ) : null}

            <CouponList />
          </div>
        </div>
      </div>
    </div>
  );
}
