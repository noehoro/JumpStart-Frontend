import React, {useState} from "react";
import "./Category.css";

const NotificationItem = (props) => {
  const [successSubmit, setSuccessSubmit] = useState("");
  const {
    title,
    description,
    img,
    onClick,
    id,
    color,
    status,
    showModal,
  } = props;

  const handleOnSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  const defineStatus = () => {
    if (status == "approved") {
      return (
        <div class="alert alert-success mt-5 pr-5" role="alert">
          <h1>Approved</h1>
        </div>
      );
    } else if (status == "pending") {
      return (
        <div class="alert alert-warning mt-5 pr-5" role="alert">
          <h1>Pending</h1>
        </div>
      );
    } else if (status == "recommended") {
      return (
        <div class="alert alert-primary mt-5 pr-5" role="alert">
          <h1>Recommended</h1>
        </div>
      );
    }
  };

  const defineColor = () => {
    if (id === "red") {
      return "category-div shadow-lg bg-yoga";
    } else if (id == 1) {
      return "category-div shadow-lg bg-hiking";
    } else if (id == 2) {
      return "category-div shadow-lg bg-2";
    } else if (id == 3) {
      return "category-div shadow-lg bg-3";
    } else if (id == 4) {
      return "category-div shadow-lg bg-4";
    } else if (id == 5) {
      return "category-div shadow-lg bg-5";
    } else if (id == 6) {
      return "category-div shadow-lg bg-6";
    } else if (id == 7) {
      return "category-div shadow-lg bg-7";
    } else if (id == 8) {
      return "category-div shadow-lg bg-8";
    } else if (id == 9) {
      return "category-div shadow-lg bg-9";
    } else if (id == 10) {
      return "category-div shadow-lg bg-10";
    } else if (id == 11) {
      return "category-div shadow-lg bg-11";
    } else if (id == "recommened") {
      return "category-div shadow-lg bg-12";
    }
  };

  return (
    <>
      <div className="mt-3">
        <button
          data-toggle="collapse"
          data-target={`#${title}`}
          className="btn hover-btn "
        >
          <div className={defineColor()}>
            <div className="row">
              <div className="col-1">
                <img src={img} width="150" className="ml-5 mt-2" />
              </div>
              <div className="col-8">
                <div className="row justify-content-center">
                  <div className="col-6 align-text-center ">
                    <h1 className="pt-5">{title}</h1>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 align-text-center pt-4"></div>
                  <h5>{description}</h5>
                </div>
              </div>
              <div className="col-3">{defineStatus()}</div>
            </div>
          </div>
        </button>
        {showModal && (
          <div>
            <div className="collapse" id={title}>
              <div className="container mt-2">
                <div className="row mt-2">
                  <div className="col">
                    <h1>details: </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-right">
                    <h5 className="text-align-right">Time:</h5>
                  </div>
                  <div className="col">
                    <h5>12/06/2020 11AM</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h5>location:</h5>
                  </div>
                  <div className="col">
                    <h5>ITC Roof, Tel Aviv</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h5>Duration:</h5>
                  </div>
                  <div className="col">
                    <h5>90 Min.</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h5>Nr. of participants:</h5>
                  </div>
                  <div className="col">
                    <h5>9</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <h5>Teacher:</h5>
                  </div>
                  <div className="col">
                    <h5>Vishay Kandra</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationItem;
