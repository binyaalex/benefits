import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

import noImage from "../../assets/images/noimage.png";

function OnlyCategoryList({ divClassName, h5ClassName, categories, slider }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState(getWindowSize());

  let categoryWidth = "363px";
  if (isMobile) {
    categoryWidth = windowSize.innerWidth * 0.9;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {categories.length ? (
        slider ? (
          <Swiper
            freeMode={true}
            slidesPerView={"auto"}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay, Pagination]}
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
                      className={divClassName}
                      style={{
                        backgroundImage: `url(${category.image || noImage})`,
                        width: categoryWidth,
                        cursor: "pointer",
                      }}
                    >
                      <h5 className={h5ClassName}>{category.title}</h5>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        ) : (
          <>
            {categories
              .filter((category) => !category.parent)
              .map((category, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(`/category/${category.id}`, {
                        state: { id: category.id },
                      });
                    }}
                    className={divClassName}
                    style={{
                      backgroundImage: `url(${category.image || noImage})`,
                    }}
                  >
                    <h5 className={h5ClassName}>{category.title}</h5>
                  </li>
                );
              })}
          </>
        )
      ) : (
        t("No categories")
      )}
    </>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default OnlyCategoryList;
