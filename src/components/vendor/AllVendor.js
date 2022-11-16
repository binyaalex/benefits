import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Header from "../header/Header";
import { getMerchants } from "../../redux/API/merchant/merchant.action";
import { CircularProgress } from "@mui/material";

import "../vendor/vendorsDetails.css";

export default function AllVendor({vendors}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const merchants = useSelector((state) => state.merchant.merchants);
  const merchantsPending = useSelector(
    (state) => state.merchant.isMerchantsPending
  );
  const [selectedTab, setSelectedTab] = useState({ id: "all", title: "all" }); // eslint-disable-line
  const [categories, setCategories] = useState([]);
  const [merchantsList, setMerchantsList] = useState(merchants);
  // const [filterMerchant, setFilterMerchant] = useState([]);
  const [title, setTitle] = useState("כל הרשתות");

  // const handleChangeTab = (e, newValue) => {
  //   if (newValue === "all") {
  //     setMerchantsList(merchants);
  //     return setSelectedTab({ id: "all", category: null });
  //   }
  //   const category = categories.find(
  //     (category) => category.title === e.target.textContent
  //   );
  //   setSelectedTab({ id: newValue, category });
  //   const list = merchants?.find((merchant) =>
  //     merchant?.categories?.map((_category) => _category.id === category.id)
  //       ? merchant
  //       : null
  //   );
  //   setMerchantsList([list]);
  // };
  useEffect(() => {
    dispatch(getMerchants());
  }, [dispatch]); // eslint-disable-line
  let filtermerchant = []
  useEffect(() => {
    if (categories.length) return;
    //eslint-disable-next-line
    console.log(merchants);
    merchants?.map((merchant) => {
      //eslint-disable-next-line
      
      if (!merchant?.categories?.length) return;
      setCategories([...categories, ...merchant.categories]);
    });
    if (vendors == 'כל המסעדות') {
      merchants?.map((merchant) => {
        if (merchant.mobile == 'מסעדה') {
          filtermerchant.push(merchant)
        }
      });
    } else {
      merchants?.map((merchant) => {
        if (merchant.mobile == 'אופנה') {
          filtermerchant.push(merchant)
        }
      });
    }
    setMerchantsList(filtermerchant)
  }, [merchants]); //eslint-disable-line

  useEffect(() => {
    if (selectedTab !== "all" && merchantsPending) return;
    return setMerchantsList(merchants);
  }, [merchantsPending]); //eslint-disable-line

  // useEffect(() => {
  //   if (vendors = 'restaurants') {
  //     setTitle('כל המסעדות')
  //   }
  // }, [vendors]);

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
    <div>
      <Header />

      <div className="pageTemplate">
        <div className="container">
          {/* <ScrollingCarousel>
            <Tabs
              value={selectedTab.id}
              // onChange={handleChangeTab}
              className="categoriesSliderTabs"
            >
              <Tab value="all" label={t("all")}>
                {t("all")}
              </Tab>
              {merchantCategoriesArr?.map((category) => (
                <Tab value={category.id} label={category.title}>
                  {category.title}
                </Tab>
              ))}
            </Tabs>
          </ScrollingCarousel> */}
          {/* {selectedTab.id === "all" && (
            <div className="vendorAllListBlock">
              <h6 className="module-heading__title">{t("popularVendors")}</h6>
              <ul className="categoryList">
                {merchants.length > 0 ? (
                  merchants.map((item) => (
                    <>
                      <li
                        className="categoryList__block isLink"
                        onClick={() => {
                          navigate(`/vendor/${item.id}`, {
                            state: { id: item.id },
                          });
                        }}
                      >
                        <div className="category-box text-center">
                          <span className="category-boxSubTitle">
                            12 {t("km")}
                          </span>
                          <div className="category-box__img">
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt="My Awesome"
                            />
                          </div>
                          <h6 className="category-box__title">{item.title}</h6>
                        </div>
                      </li>
                    </>
                  ))
                ) : merchantsPending ? (
                  <CircularProgress />
                ) : (
                  t("No merchants")
                )}
              </ul>
            </div>
          )} */}

          <div className="vendorAllListBlock">
            <h6 className="module-heading__title">
              {/* {selectedTab.id !== "all"
                ? selectedTab.category.title
                : t("allvendors")} */}
                {vendors}
            </h6>
            <ul className="categoryList">
              {merchantsList?.length > 0 ? (
                merchantsList.map((item) => (
                  <>
                    <li className="categoryList__block">
                      {/* <div className="category-box text-center"> */}
                      {/* <span className="category-boxSubTitle">{item.km}</span> */}
                      <div className="category-box__img">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="My Awesome"
                        />
                      </div>
                      <h6 className="category-box__title">{item.title}</h6>
                      {/* </div> */}
                    </li>
                  </>
                ))
              ) : merchantsPending ? (
                <CircularProgress />
              ) : (
                t("No merchants")
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
