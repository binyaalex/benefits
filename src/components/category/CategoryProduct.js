import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Header from "../header/Header";
import Pagination from "../dashboard/pagination";
import {
  getProductCategory,
  getProductsByCategoryId,
} from "../../redux/API/productCategories/productCategories.action";

import { GiTwoCoins } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

export default function CategoryProduct() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location?.state;
  const category = useSelector(
    (state) => state.productCategories.productCategory
  );
  // const products = useSelector(
  //   (state) => state.productCategories.productsCategory
  // );
  const isProductsCategoryPending = useSelector(
    (state) => state.productCategories.isProductsCategoryPending
  );

  const categories = useSelector(
    (state) => state.productCategories.productCategories
  );

  let productByCategoryById = [];
  let subCategoriesById = [];
  categories.map((category) => {
    if (category.parent === id) {
      category.products.map((product) => {
        productByCategoryById.push(product);
        return product;
      });
      subCategoriesById.push(category);
    }

    return category;
  });
  const [filterProducts, setFilterProducts] = useState(productByCategoryById);

  const makeProductsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(makeProductsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentFilterProducts = filterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getProductCategory(id));
    dispatch(getProductsByCategoryId(id));
  }, [id]); //eslint-disable-line

  const handleChange = (event, newValue) => {
    setCurrentPage(1);
    console.log(newValue);
    if (newValue === "all") {
      setFilterProducts(productByCategoryById);
    } else {
      const subCategoryById = subCategoriesById.filter(
        (product) => product.id === newValue
      );
      console.log(subCategoryById);
      setFilterProducts(subCategoryById[0].products);
    }
  };
  console.log(filterProducts);

  return (
    <div>
      <Header />
      <div className="pageTemplate">
        <div className="container">
          <div
            className="PageBgHeading"
            style={
              category?.image
                ? { backgroundImage: `url(${category.image})` }
                : {}
            }
          >
            <h5 className="PageBgHeading-title">{t(category?.title)}</h5>
          </div>

          <Tabs
            defaultSelectedIndex={0}
            className="categoriesSliderTabs"
            onChange={handleChange}
          >
            <Tab value="all" label={t("all")}>
              All
            </Tab>
            {subCategoriesById.length > 0 &&
              subCategoriesById.map((category) => (
                <Tab value={category.id} label={category.title}>
                  {category.title}
                </Tab>
              ))}
          </Tabs>

          {!isProductsCategoryPending ? (
            <ul className="product-Module">
              {filterProducts.length > 0
                ? filterProducts.map((product) => {
                    return (
                      <>
                        <li
                          className="product-Module__list isLink"
                          onClick={() => {
                            // if (product.imagename === "booking") {
                            //   navigate("/company", {
                            //     state: { isBookingApp: true },
                            //   });
                            // } else {
                            navigate(`/product/${product.id}`, {
                              state: { id: product.id },
                            });
                            // }
                          }}
                        >
                          <div className="product-box" style={{direction:"ltr"}}>
                            <div
                              className="product-box__img"
                              style={{ backgroundImage: `url(${product.image})` }}
                            >
                              <div className="product-box__likeBtn">
                                <FavoriteBorderOutlinedIcon
                                  // onClick={() => handleFavChange()}
                                />
                              </div>
                              {/* {product?.discount && (
                                  <div className="product-box__discount">
                                    <span className="product-box__off">
                                      {product.discountType ? "" : "-"}
                                      {product.discount}
                                      {product.discountType}
                                    </span>
                                  </div>
                                )} */}
                            </div>
                            <div className="product-box__info">
                              <div className="product-box__infoTop">
                                <div className="product-box__titleAndLoc">
                                  <h6 className="product-box__brand">
                                    {product.title}
                                  </h6>
                                  <div className="product-box__Loc">
                                    <MdLocationOn />
                                    <h6 className="product-box__brand product-box__LocH">
                                      הרצליה
                                    </h6>
                                  </div>
                                </div>
                                <span className="product-box__price">
                                  {/* {product?.oldPrice && ( */}
                                  <>
                                  <s>₪{product?.price + product?.credit}</s>&nbsp;
                                    {/* <s>{product.oldPrice}₪</s>&nbsp; */}
                                  </>
                                  {/* )} */}
                                </span>
                              </div>
                              <div className="product-box__priceDiv">
                                <span className="product-box__price bold">
                                  {product?.credit && (
                                    <>
                                      <GiTwoCoins /> {product.credit} +{" "}
                                    </>
                                  )}
                                  ₪{product?.price || 0}
                                </span>
                              </div>
                              {/*<h5 className="product-box__name">*/}
                              {/*  3 {t("boxSimple")}{" "}*/}
                              {/*</h5>*/}
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })
                : t("No products")}
            </ul>
          ) : (
            t("Loading...")
          )}
          {/* <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filterProducts.length}
            paginate={paginate}
          /> */}
        </div>
      </div>
    </div>
  );
}
