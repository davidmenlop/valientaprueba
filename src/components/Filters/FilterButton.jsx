import React from "react";

const FilterButton = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          input[type="checkbox"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            setPageNumber(1);
            task(items);
          }}
          class="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
