import React, {useState, useEffect} from "react";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

function Reviews () {

    const [reviews, setReviews] = useState([]);
    
    useEffect (() => {
        fetch("./reviews")
        .then((r) => r.json())
        .then((reviews) => {
          console.log(reviews)
          setReviews(reviews)
        })
      }, [])

    return (
        <div className="review">
      <h3>Reviews</h3>
      {reviews.map(review => (
        <div key={review.game_id}>
          <p><strong>{review.title}</strong></p>
          <p>{review.description}</p>
          <UpdateReview />
        </div>
      ))}
    </div>
    )

}

export default Reviews;