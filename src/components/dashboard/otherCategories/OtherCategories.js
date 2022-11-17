import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import noImage from "../../assets/images/noimage.png";

function OtherCategories({ categories, slider }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="otherCategories">
      {categories.length ? (
        slider ? (
          <Swiper
            freeMode={true}
            slidesPerView={"auto"}
            spaceBetween={15}
            style={{ direction: "ltr" }}
          >
            {categories
              .filter((category) => !category.parent)
              .map((category, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{ width: "auto" }}
                    onClick={() => {
                      navigate(`/category/${category.id}`, {
                        state: { id: category.id },
                      });
                    }}
                  >
                    <div
                      className="otherCategory"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {category.icon}
                      <h5 className="otherCategoryTitle">{category.title}</h5>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        ) : (
          <div className="otherCategoriesDiv">
            {categories
              .filter((category) => !category.parent)
              .map((category, index) => {
                return (
                  <div
                    className="otherCategory"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/category/${category.id}`, {
                        state: { id: category.id },
                      });
                    }}
                  >
                    {category.icon}
                    <h5 className="otherCategoryTitle">{category.title}</h5>
                  </div>
                );
              })}
          </div>
        )
      ) : (
        t("No categories")
      )}
    </div>
  );
}

export default OtherCategories;
