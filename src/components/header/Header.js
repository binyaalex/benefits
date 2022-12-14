import './header.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../searchResult/SearchResult";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png"
import lmLogo from "../../assets/images/lm.jpg"
import logo2 from "../../assets/images/logo.jpg"
import MenuIcon from "@mui/icons-material/Menu";
import { GiTwoCoins } from "react-icons/gi";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../language/languageSelect";
import Coupon from "../../assets/images/couponCover.jpg"
import Drawer from "@mui/material/Drawer";
import MicIcon from "@mui/icons-material/Mic";
import {
    getMerchants,
    getProductCategories,
} from "../../redux/actions-exporter";

const Header = () => {
    const { t } = useTranslation();
    const [notification, setNotification] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [searchText, setSearchText] = useState([]);
    const [filterStores, setFilterStores] = useState([]);
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const merchants = useSelector((state) => state.merchant.merchants);

    const dispatch = useDispatch();
    const categories = useSelector(
        (state) => state.productCategories.productCategories
    );
    useEffect(() => {
        dispatch(getMerchants());
        dispatch(getProductCategories());
    }, [dispatch]);

    const user = useSelector((state) => state.user.user);

    const handlenotification = () => {
        if (!notification) {
            setNotification(true);
        } else {
            setNotification(false);
        }
    };

    useEffect(() => {
        if (categories.length) {
            const prepareProduct = categories.reduce(
                (previous, current) => [
                    ...previous,
                    ...current.products.map((product) => ({
                        ...product,
                        categoryId: current.id,
                        categoryName: current.title,
                    })),
                ],
                []
            );
            setProducts(prepareProduct);
            setFilterProducts(prepareProduct);
        }
    }, [categories]);

    const openSearch = () => {
        setIsSearchOpen(true);
    };
    const openInfo = () => {
        setIsInfoOpen(true);
    };

    useEffect(() => {
        if (categories.length) {
            const prepareProduct = categories.reduce(
                (previous, current) => [
                    ...previous,
                    ...current.products.map((product) => ({
                        ...product,
                        categoryId: current.id,
                        categoryName: current.title,
                    })),
                ],
                []
            );
            setProducts(prepareProduct);
            setStores(merchants);
        }
    }, [categories]);
    useEffect(() => {
        const filteredP = products.filter((product) =>
            product.title.includes(searchText)
        );
        filteredP === products
            ? setFilterProducts([])
            : setFilterProducts(filteredP);

        const filteredS = stores.filter((store) =>
            store.title.includes(searchText)
        );

        filteredS === stores ? setFilterStores([]) : setFilterStores(filteredS);
        // console.log(filterStores);
    }, [searchText]);
    return (
        <div className="header">
            <div className="top">
                {/* <div className='menuIcon'>
                    <MenuIcon
                        fontSize="large"
                        sx={{ color: 'var(--secondary)' }}
                    />
                </div> */}
                {/* <div className='menuIcon'>
                    <PersonIcon
                        fontSize="large"
                        sx={{ color: 'var(--secondary)' }}
                    />
                </div> */}
                <img className='lmLogo' src={lmLogo} />

                <img className='benefitsLogo' src={logo} />
                {/* <div className="menuIcon">
                    <LanguageSelect />
                </div> */}
                {/* <div className='menuIcon' onClick={openSearch}>
                    <SearchOutlinedIcon
                        fontSize="large"
                        sx={{ color: 'var(--secondary)' }}

                    />
                </div> */}
            </div>
            {/* { */}
            {/* isFull ? */}
            <div className="bottom">
                <div className="par">
                    <div className="balanceH">???????? ????????</div>
                    <div className="balanceAmount">
                        {user?.credit?.toFixed(1) || 1200}

                        <GiTwoCoins sx={{ color: 'var(--primary)' }}
                        />
                    </div>
                </div>


                <div className='collect' onClick={openSearch}>
                    {/* <InfoIcon /> */}
                    <span>
                        ??????????
                    </span>
                    <SearchOutlinedIcon
                        fontSize="large"
                        sx={{ color: 'var(--primary)' }}
                    />

                    {/* <KeyboardArrowLeftIcon
                    sx={{ color: 'var(--primary)' }}
                    /> */}
                </div>
                <div className="notificationBlock">
                    <Button className="dropBtn">
                        <NotificationsNoneIcon
                            onClick={handlenotification}
                        />
                        <span className="subCount">3</span>
                    </Button>
                </div>
                {notification ? (
                    <div className="notificationList">
                        <div className="chatMainBox">
                            <div className="chatMainBox__inner">
                                <div className="chatMainBox__img">
                                    <img
                                        src={user || logo2}
                                        alt=""
                                        height={50}
                                        width={50}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="chatMainBox__info">
                                    <h4 className="chatMainBox__name">
                                        {t("chatbot")}
                                    </h4>
                                    <p className="chatMainBox__text">
                                        lorem ipsum dolor sir amet
                                    </p>
                                </div>
                            </div>
                            <span className="chatMainBox__time">4pm</span>
                        </div>
                    </div>
                ) : null}

            </div>
            {/* : null */}
            {/* } */}
            <Drawer
                PaperProps={{
                    sx: { width: "75%", marginTop: "72px" },
                }}
                open={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            >
                <form className="search-container active-search">
                    <div className="search-container__btn">
                        <SearchOutlinedIcon />
                    </div>
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="??????????"
                        className="search-container__input"
                        onChange={(e) => setSearchText(e.target.value)}
                        // onClick={openSearch}
                        value={searchText}
                    />
                    <div className="mic-container__btn">
                        <MicIcon />
                    </div>
                </form>
                <SearchResult
                    filterProducts={filterProducts}
                    filterStores={filterStores}
                />
            </Drawer>

            <Drawer
                className="infoWrapper"
                PaperProps={{
                    sx: { width: "90%", height: "75%", margin: "40% 5%", borderRadius: "10px", padding: "10px" },
                }}
                open={isInfoOpen}
                onClose={() => setIsInfoOpen(false)}
            // anchor="bottom"
            >
                <div className="info">
                    <img src={Coupon} />
                    <h5>????????....?????????? ???????????? ????????!</h5>
                    <p className="marginP">???? ???? ???????? ?????????? 6% ????????!!! ??"???????? ??????".
                        ?????????????? ???????????? ?????????? ???????????? ???????????????? ????????.</p>

                    <p className="marginP">???? "???????? ??????" ???????? ???????? ???????????? ?????????? ?????????? ??????????????.
                        ????????????: ?????????? ?????? 300 ??"?? ???????????? ?????????? ?????????? ???????? ???? 36 "???????????? ??????" ???????????? ???????????? ???????? ???? 264 ??"??
                    </p>
                    <p>          ??????????...???????????? ???????????? ??????????:</p>
                    <p>       ?????????? ??????????</p>
                    <p>      ?????????? ??????????????</p>
                    <p>    ?????????? ?????????? ????????</p>
                    <p>    ????????????????</p>
                    <p>  ????????...</p>

                </div>
            </Drawer>
        </div >
    )
}

export default Header;
