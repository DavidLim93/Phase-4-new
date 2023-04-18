import React, { useState } from "react";
import Reviews from "./Reviews";

function ReviewForm({setReviews, onAddReview}) {
  
  const [reviewReview, setReviewReview] = useState('');
  const [reviewTitle, setReviewTitle] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const addReview = { review: {
      "title": reviewTitle,
      "review": reviewReview,
    }};

   
    fetch(`./reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({addReview}),
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews(onAddReview(...Reviews, newReview));
      });

  }
      return (
        <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              className="review-title"
              // id="title"
              value={reviewTitle}
              placeholder="Review title"
              onChange={(e) => setReviewTitle(e.target.value)}
            ></textarea>
            <textarea
           className="review-box"
              // id="review"
              value={reviewReview}
              placeholder="Review comment"
              onChange={(e) => setReviewReview(e.target.value)}
            ></textarea>
            <section>
              {/* {ratingOptions} */}
            </section>
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
      )

}

export default ReviewForm