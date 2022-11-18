import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// import Footer from "./components/footer/Footer";
import Footer from "./components/newFooter/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UserProfile from "./components/userprofile/UserProfile";
import CategoryDetails from "./components/category/CategoryDetails";
import ProductDetails from "./components/product/ProductDetails";
import VendorsDetails from "./components/vendor/VendorDetails";
import Cart from "./components/cart/Cart";
import Wallets from "./components/wallets/Wallets";
import Payment from "./components/wallets/Payment";
import LoadMoney from "./components/wallets/LoadMoney";
import CreaditCard from "./components/wallets/CreaditCard";
import Dashboard from "./components/dashboard/Dashboard";
import CategoryList from "./components/category/CategoryList";
import Map from "./components/location/Map";
import PaymentHistory from "./components/wallets/PaymentHistory";
import Menu from "./components/menu/Menu";
import Checkout from "./components/cart/Checkout";
import PaymentCardHistory from "./components/wallets/PaymentCardHistory";
import BusinessPayment from "./components/wallets/BusinessPayment";
import PaymentApprove from "./components/wallets/PaymentApprove";
import Company from "./components/booking/Company";
import Product from "./components/booking/Product";
import BookingCart from "./components/booking/BookingCart";
import BookingCartDetail from "./components/booking/BookingCartDetail";
import AllVendor from "./components/vendor/AllVendor";
import BookingPayment from "./components/booking/BookingPayment";
import CategoryProduct from "./components/category/CategoryProduct";
import Header from "./components/header/Header";
import ChatBot from "./components/chat/ChatBot";
import RegisterBusiness from "./components/register/RegisterBusiness";
import Shops from "./components/shop/Shops";
import ManageDashboard from "./components/dashboard/ManageDashboard";
import YourAccount from "./components/userprofile/account/YourAccount";
import ReferralProgram from "./components/userprofile/referralprogram/ReferralProgram";
import Filemanager from "./components/userprofile/filemanage/Filemanager";
import Documents from "./components/userprofile/document/Documents";
import Chatting from "./components/userprofile/chat/Chatting";
import Payments from "./components/userprofile/payment/Payments";
import Gift from "./components/gift/Gift";
import GetGift from "./components/gift/getGift/GetGift";
import UnusedBenefits from "./components/unusedBenefits/UnusedBenefits";
import { getUser } from "./redux/API/user/user.action";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Sales from "./components/sales/Sales";
import elad from "./assets/images/elad.png"
import ms from "./assets/images/logo.png"
import { CircularProgress } from '@mui/material'

function App(props) {
  const [loading, setLoading] = useState(true);
  const [newMoney, setNewMoney] = useState(0);
  const [vendors, setVendors] = useState();

  const dispatch = useDispatch();
  const { isChatOpen } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]); // eslint-disable-line

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (

    <>
      {
        loading ?
          (
            <div className="loader">
              <img src={ms} className="mainImg " />
              <CircularProgress
                size={100}
                style={{ color: 'var(--secondary)', margin: '30% 0' }} />

              <div className="loaderText">
                Powered By
              </div>
              <img src={elad} className="subImg" />
            </div>
          ) : (
            <div className="PageDad">

              <div className="Page">
                <div className={isChatOpen ? "activeChat" : ""}>
                  <ToastContainer />
                  <BrowserRouter>
                    <Routes>
                      <Route path="/header" element={<Header />} />
                      <Route path="/" element={<Dashboard />} />
                      {/* <Route path="/footer" element={<Footer />} /> */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/forgotPassword" element={<ForgotPassword />} />
                      <Route path="/userprofile" element={<UserProfile />} />
                      <Route path="/categorydetails" element={<CategoryDetails />} />
                      <Route path="/category/:id" element={<CategoryProduct />} />
                      <Route
                        path="/product/:id"
                        element={<ProductDetails {...props} />}
                      />
                      <Route
                        path="/vendor/:id"
                        element={<VendorsDetails {...props} />}
                      />
                      <Route path="/sales" element={<Sales />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wallet" element={<Wallets setVendors={setVendors} />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/loadmoney" element={<LoadMoney />} />
                      <Route path="/loadcredit" element={<LoadMoney credit={true} />} />
                      <Route path="/creaditcard" element={<CreaditCard />} />
                      <Route path="/shops" element={<Shops />} />
                      <Route path="/categorylist" element={<CategoryList />} />
                      <Route path="/map" element={<Map />} />
                      {/* <Route path="/map" element={<TestMap />} /> */}
                      <Route path="/paymenthistory" element={<PaymentHistory />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route
                        path="/paymentcardhistory"
                        element={<PaymentCardHistory />}
                      />
                      <Route path="/company" element={<Company />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/bookingcart" element={<BookingCart />} />
                      <Route
                        path="/bookingcartdetail"
                        element={<BookingCartDetail />}
                      />
                      <Route path="/allvendors" element={<AllVendor vendors={vendors} />} />
                      <Route path="/bookingpayment" element={<BookingPayment />} />
                      <Route path="/gift/*" element={<Gift />} />
                      <Route path="/getgift" element={<GetGift />} />
                      <Route path="/chatbot" element={<ChatBot />} />
                      <Route path="/registerbusiness" element={<RegisterBusiness />} />
                      <Route path="/managedashboard" element={<ManageDashboard />} />
                      <Route path="/youraccount" element={<YourAccount />} />
                      <Route path="/referralprogram" element={<ReferralProgram />} />
                      <Route path="/filemanager" element={<Filemanager />} />
                      <Route path="/documents" element={<Documents />} />
                      <Route path="/chatting" element={<Chatting />} />
                      <Route path="/payments" element={<Payments />} />
                      <Route path="/businesspayment" element={<BusinessPayment
                        newMoney={newMoney}
                        setNewMoney={setNewMoney}
                      />}
                      />
                      <Route path="/paymentapprove" element={<PaymentApprove
                        newMoney={newMoney}
                      />}
                      />
                      <Route path="/unusedbenefits" element={<UnusedBenefits />} />
                    </Routes>
                    <Footer />
                  </BrowserRouter>
                </div>
              </div>
            </div>
          )
      }

    </>
  );
}
export default App;
