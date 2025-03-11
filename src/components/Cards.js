import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourse, setLikedCourse] = useState([]);

  const allData = () => {
    const courseList = [];
    if (category === "All") {
      Object.values(courses).forEach((category) => {
        category.forEach((arr) => {
          courseList.push(arr);
        });
      });
      return courseList;
    } else {
      return courses[category];
    }
  };
  //   allData();
  // console.log(courseList);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
      {allData().map((data) => (
        <Card
          key={data.id}
          courseDeatils={data}
          likedCourse={likedCourse}
          setLikedCourse={setLikedCourse}
        />
      ))}
    </div>
  );
};

export default Cards;
