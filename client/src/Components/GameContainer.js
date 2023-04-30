import React, {useEffect, useState} from "react";  
import Game from "./Game";
import AddGame from "./AddGame";


function GameContainer({ reviews, setReviews}) {

  const [games, setGames] = useState([])



    useEffect (() => {
      fetch("./games")
      .then((r) => r.json())
      .then((games) => {
        // console.log(games)
        setGames(games)
      })
    }, [])

    function handleAddGame(newGame){
      setGames([...games, newGame])
    }

    function handleDeleteGame(deletedGame) {
      
      const updatedGames = games.filter((game) => game.id !== deletedGame.id);
      setGames(updatedGames);
    }

    
    

    return (
        <div className="game-container">
          <AddGame onAddGame={handleAddGame}/>
          <ul>
          {
            games.map((game) => {
              // {console.log(game.reviews[0].game_id)}
                return <Game
                key={game.id}
                id={game.reviews[0]?.game_id ?? game.id}
                name={game.name}
                image_url={game.image_url}
                onDeleteGame={handleDeleteGame}
                reviews={reviews}
                setReviews={setReviews}
                    />
        })}
          </ul>
            
     </div>
    )
}
export default GameContainer;