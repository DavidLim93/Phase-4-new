import React, {useState, useEffect} from "react";


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
        <div key={review.id}>
          <p><strong>{review.title}</strong></p>
          <p>{review.description}</p>
          <button className="button">Edit</button>
          <button className="button">Delete</button>
        </div>
      ))}
    </div>
    )

}

export default Reviews;