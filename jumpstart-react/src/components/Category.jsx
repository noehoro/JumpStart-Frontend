import React from "react";
import "./Category.css";
import Filters from "../components/Filters";

const Category = (props) => {
  const {title, description, img, onClick} = props;
  return (
    <>
      <div className="mt-3 ">
        <button
          data-toggle="collapse"
          data-target={`#${title}`}
          className="btn hover-btn"
        >
          <div className="category-div shadow-lg">
            <div className="row justify-content-center">
              <div className="col-6 align-text-center ">
                <h1 className="pt-1">{title}</h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 align-text-center pt-2"></div>
              <h5>{description}</h5>
            </div>
          </div>
        </button>
        <div>
          <div className="collapse" id={title}>
            <Filters />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
