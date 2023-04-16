import React, {useState} from "react";
import GameCard from "./GameCard";

function AddGame({setGames, games}) {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     image_url: "",
    //   });

    const [name, setName] = useState("");
    const [image_url, setImage_url] = useState("")

      // function handleChange(event) {
      //   setFormData({
      //     ...formData,
      //     [event.target.name]: event.target.value,
      //   });
      // }

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
            setGames([...games, newGame],
              console.log(setGames)
              )
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