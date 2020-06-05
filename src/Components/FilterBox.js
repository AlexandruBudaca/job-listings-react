import React from "react";

const FilterBox = ({ data, onclick, setClear }) => {
  return (
    <div className="container">
      <div className={data.length === 0 ? "row-filter-hidden" : "row-filter"}>
        <div className="filter-box ">
          <div className="filter-btns">
            {data.map((role, index) => (
              <div className="filter-btn-div" key={index}>
                {role}
                <button
                  key={role.id}
                  className="role"
                  onClick={() => {
                    onclick(role);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <a
            href="/"
            className={data.length === 0 ? "clear-not-show" : "clear-show"}
            onClick={setClear}
          >
            Clear
          </a>
        </div>
      </div>
    </div>
  );
};
export default FilterBox;
