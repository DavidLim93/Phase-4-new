import React, {useState} from "react";
import Star from "./Star";

function Rating (props) {
    // const score = (props.score / 5) * 100

    const [rating, setRating] = useState(0);

    const handleStarClick = (starNumber) => {
      setRating(starNumber);
    };

    const averageRating = rating ? rating / 5 : 0;


    return (
      // <span className="star-wrapper">
      //   <span className="stars" style={{ width: score + "%" }}></span>
      // </span>


        <div className="star-wrapper">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                filled={i < rating}
                onClick={() => handleStarClick(i + 1)}
              />
            ))}
            <p> {averageRating}</p>
          </div>


    )

}

export default Rating


