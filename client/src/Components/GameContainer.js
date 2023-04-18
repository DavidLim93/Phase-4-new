import React, {useEffect, useState} from "react";  
import Game from "./Game";
import AddGame from "./AddGame";


function GameContainer({onAddGame}) {

  const [games, setGames] = useState([])

    useEffect (() => {
      fetch("./games")
      .then((r) => r.json())
      .then((games) => {
        console.log(games)
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
                return <Game
                key={game.id}
                name={game.name}
                image_url={game.image_url}
                onDeleteGame={handleDeleteGame}
                    />
        })}
          </ul>
            
     </div>
    )
}
export default GameContainer;