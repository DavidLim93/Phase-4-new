import React, { useState, useEffect } from "react";


function ReviewForm({  game_id }) {
  
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  // const [game_id, setGame_id] = useState('');
  const [reviews, setReviews] = useState([])

  function fetchData(){
     fetch(`./reviews`)
    .then((r) => r.json())
    .then((review) => {
      // console.log(review)
      setReviews(review)
    })
  }


  useEffect (() => {
    fetchData()
  }, [])


  function handleAddReview(newReview){

    console.log(reviews)
    setReviews([...reviews, newReview])
    console.log(newReview)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      title,
      description,
      game_id: game_id
 
    };
    // console.log(newReview);

    fetch(`./reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then(() => {
        console.log(newReview)
        // fetchData();
        setReviews( reviews => [newReview, ...reviews])
        console.log(reviews)
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