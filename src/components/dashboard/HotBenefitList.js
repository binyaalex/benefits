import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { GiTwoCoins } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";

import { getMerchants } from "../../redux/actions-exporter";

// import hotBenefit1 from "../../assets/images/hotBenefit1.png";
import hotBenefit1 from "../../assets/images/piza.jpg";
import hotBenefit2 from "../../assets/images/morning.jpg";
import hotBenefit3 from "../../assets/images/burger.jpg";
import hotBenefit4 from "../../assets/images/asian.jpg";

export default function HotBenefitList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const merchants = useSelector((state) => state.merchant.merchants);
  const hotBenefitsArr = [
    {
      title: "שוברי פיצות",
      price: 49,
      image: hotBenefit1,
      category: "אוכל",
      coins: 20,
      city: "ירושלים",
      new: 29,
    },
    {
      title: "שוברי ארוחות בוקר",
      price: 34,
      image: hotBenefit2,
      category: "אוכל",
      coins: 10,
      city: "ירושלים",
      new: 24,
    },
    {
      title: "שוברי המבורגרים",
      price: 11,
      image: hotBenefit3,
      category: "אוכל",
      coins: 4,
      city: "ירושלים",
      new: 7,
    },
    {
      title: "שוברי אוכל אסייתי",
      price: 49,
      image: hotBenefit4,
      category: "אוכל",
      coins: 20,
      city: "ירושלים",
      new: 29,
    },
    // {
    //   title: "קפה נמס",
    //   price: 34,
    //   image: hotBenefit2,
    //   category: "אוכל",
    //   coins: 10,
    //   city: "ירושלים",
    //   new: 24,
    // },
    // {
    //   title: "אייר ביס בצל",
    //   price: 11,
    //   image: hotBenefit3,
    //   category: "אוכל",
    //   coins: 4,
    //   city: "ירושלים",
    //   new: 7,
    // }
  ];
  useEffect(() => {
    dispatch(getMerchants());
  }, [dispatch]); // eslint-disable-line

  // const merchantCategoriesArr = [
  //   {
  //     title: t("ClothingAndFashionAccessories"),
  //     id: 1,
  //   },
  //   {
  //     title: t("footwear"),
  //     id: 2,
  //   },
  //   {
  //     title: t("HygieneCareAndBeauty"),
  //     id: 3,
  //   },
  //   {
  //     title: t("bookstoresAndSports"),
  //     id: 4,
  //   },
  //   {
  //     title: t("toysAndGames"),
  //     id: 5,
  //   },
  //   {
  //     title: t("foodAndCafes"),
  //     id: 6,
  //   },
  //   {
  //     title: t("housewares"),
  //     id: 7,
  //   },
  //   {
  //     title: t("electricalProductStores"),
  //     id: 8,
  //   },
  // ];

  return (
    <>
      <div className="row align-items-center">
        <div className="col-7">
          <h6 className="module-heading__title">ההטבות החמות</h6>
        </div>
        <div
          className="col-5 text-right isLink"
          onClick={() => {
            navigate("/allvendors");
          }}
        >
          {props.isAllVendors ? (
            <div className="module-heading__link">{t("allStores")}</div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <Tabs
        defaultSelectedIndex={0}
        className="categoriesSliderTabs"
        // onChange={handleChange}
      >
        <Tab value="all" label={t("all")}>
          All
        </Tab>
        {merchantCategoriesArr.length > 0 &&
          merchantCategoriesArr.map((category) => (
            <Tab value={category.id} label={category.title}>
              {category.title}
            </Tab>
          ))}
      </Tabs> */}

      <ScrollingCarousel>
        <ul className="categoryList">
          {hotBenefitsArr.length > 0
            ? hotBenefitsArr.map((item) => (
              <>
                <li
                  // onClick={() => {
                  //   navigate(`/vendor/${item.id}`, {
                  //     state: { id: item.id },
                  //   });
                  // }}
                  className="hotBenefit isLink"
                >
                  <div className="hotBenefitImg">
                    <img src={item.image} alt="My Awesome" />
                    {/* <div className="hotBenefitCategory">{item.category}</div> */}
                  </div>
                  <div className="hotBenefitContent">
                    <div className="old">
                      <h6 className="hotBenefitNew">{item.title}</h6>
                      {/* <h6 className="hotBenefitOld price">{item.price} ₪</h6> */}
                    </div>
                    {/* <div className="hotLocation">
                        <MdLocationOn />
                        <h6 className="hotBenefitOld">{item.city}</h6>
                      </div> */}

                    {/* <div className="hotLocation">
                      <LocationOnIcon />
                      <h6 className="hotLocation">{item.city}</h6>
                    </div> */}

                    {/* <div className="new">
                        <h5 className="hotBenefitNew">
                          ₪{item.new} + {item.coins}
                          <GiTwoCoins />
                        </h5>
                      </div> */}
                  </div>
                </li>
              </>
            ))
            : t("No merchants")}
        </ul>
      </ScrollingCarousel>
    </>
  );
}
