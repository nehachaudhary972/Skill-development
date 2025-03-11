import React from "react";

const Filter = (props) => {
  let filterData = props.filteringData;
  let category = props.category;
  let setCategory = props.setCategory;

  function handleClickFunc(title) {
    setCategory(title);
  }
  return (
    <div className="flex items-center justify-center px-4 py-4 mx-auto">
      {filterData.map((items) => (
        <button
          className="bg-bgDark ml-4 rounded-md px-4 py-4 hover:border hover:border-white text-white"
          key={items.id}
          onClick={() => handleClickFunc(items.title)}
        >
          {items.title}
        </button>
      ))}
    </div>
  );
};
export default Filter;
