import React from "react";

const FilterBox = ({ data, onclick }) => {
  return (
    <div>
      {data.map((role) => (
        <button
          className="role"
          key={role}
          onClick={() => {
            onclick(role);
          }}
        >
          {role}
        </button>
      ))}
    </div>
  );
};
export default FilterBox;
