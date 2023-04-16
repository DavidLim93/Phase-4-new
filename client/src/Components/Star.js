import React from "react";

const Star = ({ filled, onClick }) => {
  const starClass = filled ? "star filled" : "star empty";
  return <span className="stars" onClick={onClick}></span>;
};

export default Star;
