import React, {useState} from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";


function Game (props, { onDeleteGame }) {



    function handleDeleteClick() {
        fetch(`./games/${props.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
         }})
          .then((r) => r.json())
          .then(() => onDeleteGame(props));
      }


    return (
        <div className="cards">
            <h3>{props.name}</h3>
            <img alt="No Image Available" src={props.image_url}></img>
            <br></br>
            <button className="delete" onClick={handleDeleteClick}>Delete Game</button>
            <Reviews />
            <ReviewForm />
        </div>
    )

}

export default Game;