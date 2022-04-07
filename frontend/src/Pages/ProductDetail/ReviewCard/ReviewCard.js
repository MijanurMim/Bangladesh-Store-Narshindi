import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const { name, comment } = review;

  //   Rating Options
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };
  return (
    <div>
      <img src="" alt="User" />
      <p>{name}</p>
      <ReactStars {...options}></ReactStars>
      <span>{comment}</span>
    </div>
  );
};

export default ReviewCard;
