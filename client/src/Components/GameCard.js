import React from "react";
import Rating from "./Rating"
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

function GameCard(props, {setReview}) {

    function handleAddReview(newReview) {
        setReview(...Reviews, newReview)
      }


    return (
        <div className="cards">
            <h3>{props.name}</h3>
            <img alt="No Image Available" src={props.image_url}></img>
            {/* <span>Rating</span> */}
            {/* <Rating score={props.average_score} /> */}
            <Reviews />
            <ReviewForm onAddReview={handleAddReview}/>
        </div>
    )

}

export default GameCard;