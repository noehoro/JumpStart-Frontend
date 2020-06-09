import React, {useState} from "react";

const Filters = (props) => {
  const [morning, setMorning] = useState(false);
  const [evening, setEvening] = useState(false);
  const [week, setWeek] = useState(false);
  const [weekEnd, setWeekEnd] = useState(false);
  const [location, setlocation] = useState("");
  const [comments, setComments] = useState("");
  const {category, title} = props;

  const toggleWeek = () => {
    if (!week) {
      setWeek(true);
    } else {
      setWeek(false);
    }
  };

  const toggleWeekEnd = () => {
    if (!weekEnd) {
      setWeekEnd(true);
    } else {
      setWeekEnd(false);
    }
  };

  const toggleDay = () => {
    if (!morning) {
      setMorning(true);
    } else {
      setMorning(false);
    }
  };

  const togggleEvening = () => {
    if (!evening) {
      setEvening(true);
    } else {
      setEvening(false);
    }
  };

  const handleSubmit = () => {
    props.onSubmit()
    let data = {
      category: category,
      morning: morning,
      evening: evening,
      week: week,
      weekEnd: weekEnd,
      location: location,
      comments: comments,
    };
    console.log(data);
  };

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-6 d-flex justify-content-center">
              <h1>Filters</h1>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <div className="row justify-content-center mt-6">
              <div className="col-6 d-flex justify-content-end">
                <h2>Time: </h2>
              </div>
              <div className="col-6 d-flex justify-content-center mt-3">
                <div className="custom-control custom-checkbox">
                  <input
                    onChange={() => {
                      toggleWeek();
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id="week"
                  ></input>
                  <label className="custom-control-label" htmlFor="week">
                    Week
                  </label>
                </div>
                <div className="custom-control custom-checkbox ml-3">
                  <input
                    onChange={() => {
                      toggleWeekEnd();
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id="week-end"
                  ></input>
                  <label className="custom-control-label" htmlFor="week-end">
                    Week-end
                  </label>
                </div>
                <div className="custom-control custom-checkbox ml-3">
                  <input
                    onChange={() => {
                      toggleDay();
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id="day-time"
                  ></input>
                  <label className="custom-control-label" htmlFor="day-time">
                    Day-time
                  </label>
                </div>
                <div className="custom-control custom-checkbox ml-3">
                  <input
                    onChange={() => {
                      togggleEvening();
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id="evening"
                  ></input>
                  <label className="custom-control-label" htmlFor="evening">
                    Evening
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <div className="row justify-content-center mt-6">
              <div className="col-6 d-flex justify-content-end">
                <h2>Loaction: </h2>
              </div>
              <div className="col-6 d-flex justify-content-start">
                <select
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                  className="form-control form-control-sm ml-5 mr-5"
                >
                  <option value="tel-aviv">Tel-Aviv</option>
                  <option>Jerusalem</option>
                  <option>Eilat</option>
                  <option>Haifa</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-2 mb-2">
            <div className="row justify-content-center mt-6">
              <div className="col-6 d-flex justify-content-end">
                <h2>Additional Comments: </h2>
              </div>
              <div className="col-6 d-flex justify-content-start">
                <input
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                  className=" ml-5 input-rounded"
                  type="text"
                  placeholder=" Any additional requirements.."
                ></input>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-6 d-flex justify-content-center">
              <button
                data-toggle="collapse"
                data-target={`#${title}`}
                onClick={() => {
                  handleSubmit();
                }}
                className="btn btn-warning p-3 rounded-pill"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
