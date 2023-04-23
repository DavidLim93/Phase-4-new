import React, {useState} from "react";
import Game from "./Game";

function AddGame({onAddGame}) {
   
  
    const [name, setName] = useState("");
    const [image_url, setImage_url] = useState("")

     

      function handleSubmit(event) {
        event.preventDefault();
    
        const newGame = {
            "name": name,
            "image_url": image_url
          };
      
    
        fetch("/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGame),
        })
          .then((r) => r.json())
          .then((newGame) => {
            onAddGame(newGame)
          });
      }
    

return (
    <div>
         <div className="container">
      <form onSubmit={handleSubmit} className="add-game-form">
        <h3>Add a game!</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter game's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image_url"
          onChange={(e) => setImage_url(e.target.value)}
          value={image_url}
          placeholder="Enter game's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          className="submit"
        />
      </form>
    </div>

    </div>
)
}

export default AddGame;