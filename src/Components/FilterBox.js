import React from "react";

const FilterBox = ({ data, onclick, setClear }) => {
  return (
    <div className="filter-box ">
      <div>
        {data.map((role) => (
          <button
            className="role"
            key={role}
            onClick={() => {
              onclick(role);
            }}
          >
            {role} <span>X</span>
          </button>
        ))}
      </div>
      <button
        className={data.length === 0 ? "clear-not-show" : "clear-show"}
        onClick={setClear}
      >
        Clear
      </button>
    </div>
  );
};
export default FilterBox;
