import React, {useState} from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";


function Game ({onDeleteGame, name, image_url, id, games, game, reviews, setReviews}) {

  const [showForm, setShowForm] = useState(false);
  


    function handleDeleteClick() {
      if (window.confirm("Are you sure you want to delete this game?")) {
        fetch(`./games/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((r) => r.json())
          .then(() => {
            console.log("Deleting game:", game);
            onDeleteGame(game);
            }   
          )}};

      // function handleAddReview(newReview){
      //   console.log(reviews)
      //   console.log(newReview)
      //   setReviews([...reviews, newReview])
        
      // }

      function handleAddReviewClick() {
        setShowForm(true);
      }

      function handleCancelAddReview() {
    setShowForm(false);
  }

    return (
        <div className="cards">
            <h3>{name}</h3>
            <img className="image" alt="Not Available" src={image_url}></img>
            <br></br>
            {/* {console.log(id)} */}
            <ReviewList game_id={id} />
            <button className="button" onClick={handleAddReviewClick}>Add Review</button>
            {showForm && (
              <>
                <ReviewForm  game_id={id}/>
                <button className="button" onClick={handleCancelAddReview}>Cancel</button>
              </>
            )}
            <br></br>
             <button className="delete" onClick={handleDeleteClick} >Delete Game</button>
        </div>
        
    )

}

export default Game;