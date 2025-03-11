import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let courseDeatils = props.courseDeatils;
  let likedCourse = props.likedCourse;
  console.log(likedCourse);
  let setLikedCourse = props.setLikedCourse;

  function handlerFunClick() {
    //logic
    if (likedCourse.includes(courseDeatils.id)) {
      // case 1: course already liked then course unliked
      setLikedCourse((prev) => prev.filter((cid) => cid !== courseDeatils.id));
      toast.warning("Liked Removed");
    } else {
      if (likedCourse.length === 0) {
        setLikedCourse([courseDeatils.id]);
      } else {
        //phele non empty hai means ek na ek course already present hai
        setLikedCourse((prev) => [...prev, courseDeatils.id]);
      }
      toast.success("Liked Successfully");
    }

    // case 2:
  }
  return (
    <div className="w-[300px] h-[350px] ml-10 items-center bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={courseDeatils.image.url} alt={courseDeatils.image.alt}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={handlerFunClick}>
            {likedCourse.includes(courseDeatils.id) ? (
              <FcLike fontSize="1.8rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.8rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {courseDeatils.title}
        </p>
        <p className="mt-2 text-white">
          {courseDeatils.description.length > 100
            ? courseDeatils.description.substring(0, 100) + "..."
            : courseDeatils.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
