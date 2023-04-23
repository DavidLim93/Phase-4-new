import React, { useState } from "react";


function ReviewForm({ onAddReview, game_id }) {
  
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  // const [game_id, setGame_id] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // const addReview = {
    //   // "game_id": game_id,
    //   "title": title,
    //   "review": review,
    // };

   
    const newReview = {
      title,
      description,
      game_id: game_id
    };
    fetch(`./reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((review) => {
        console.log(review);
        onAddReview(review);
      });
    setTitle("");
    setDescription("");

  }
      return (
        <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              className="review-title"
              // id="title"
              value={title}
              placeholder="Review title"
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <textarea
           className="review-box"
              // id="review"
              value={description}
              placeholder="Review comment"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
      )

}

export default ReviewForm