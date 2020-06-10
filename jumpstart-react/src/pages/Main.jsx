import React, {useState, useEffect} from "react";
import Category from "../components/Category";
import "./Main.css";
import Filters from "../components/Filters";
import CategoriesFilters from "../components/CategoriesFilters";

const Main = () => {
  const [category, setCategory] = useState("");

  const handleOnClick = (title) => {
    setCategory(title);
  };

  return (
    <div>
      <div className="title-div">
        <div className="container ">
          <div className="row justify-content-center pt-4 mb-5">
            <div className="col-6 align-text-center">
              <h1 className="text-header">Activities </h1>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="categories-div">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <CategoriesFilters />
              </div>
            </div>
          </div>
          <div className="container pt-4">
            <div className="d-flex flex-wrap justify-content-center">
              <Category
                title="Yoga"
                description="Get flexible with friends"
                img=""
                onClick={handleOnClick}
              />
              <Category
                title="Hiking"
                description="Go for a walk, make friends along the way"
                img=""
                onClick={handleOnClick}
              />
              <Category
                title="Board-games"
                description="Get smarter every day,and remember it's not winning that matters"
                img=""
                onClick={handleOnClick}
              />
              <Category
                title="Cooking"
                description="Improve your kooking skills, and impress your relatives"
                img=""
                onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Main;
