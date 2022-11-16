import { useNavigate } from "react-router-dom";

import "./SearchResult.css";

const SearchReults = ({ filterProducts, filterStores }) => {
  const navigate = useNavigate();

  window.onload = () => {
    document.onclick = function (e) {
      if (e.target.className !== "menuSearch" && e.target.id !== "search-bar") {
        document.querySelector(".menuSearch").style.display = "none";
      }
    };
  };

  return (
    <div className="menuSearch">
      <div className="menuSearchSection">
        <div className="menuSearchSectionLink">הטבות</div>
        <div className="MenuSearchItemsDiv">
          {filterProducts.map((el, i) => {
            return (
              <div
                onClick={() => {
                  navigate(`/product/${el.id}`, {
                    state: { id: el.id },
                  });
                }}
                className="menuSearchItem"
                key={i}
              >
                <img alt="" className="menuSearchItemImg" src={el.image} />
                <div className="menuSearchItemText">{el.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="menuSearchSection">
        <div to={"#"} className="menuSearchSectionLink">
          רשתות
          {/* {header} */}
        </div>
        <div className="MenuSearchItemsDiv">
          {filterStores.map((el, i) => {
            return (
              <div
                onClick={() => {
                  navigate(`/vendor/${el.id}`, {
                    state: { id: el.id },
                  });
                }}
                className="menuSearchItem"
                key={i}
              >
                <img alt="" className="menuSearchItemImg" src={el.image} />
                <div className="menuSearchItemText">{el.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div to="#" className="menuSearchMore"      >
        לעוד תוצאות
      </div> */}
    </div>
  );
};

export default SearchReults;
