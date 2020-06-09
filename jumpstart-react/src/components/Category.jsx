import React, {useState} from "react";
import "./Category.css";
import Filters from "../components/Filters";

const Category = (props) => {
  const [successSubmit, setSuccessSubmit] = useState("");
  const {title, description, img, onClick} = props;

  const handleOnSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };
  return (
    <>
      <div className="mt-3 ">
        {successSubmit && (
          <div className="alert alert-success" role="alert">
            <h1>request sent succesfully</h1>
          </div>
        )}
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
            <Filters category={title} title={title} onSubmit={handleOnSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
