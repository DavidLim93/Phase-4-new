import React, {useEffect, useState} from "react";  
import GameCard from "./GameCard";


function GameContainer() {

  const [games, setGames] = useState([])


  
    useEffect (() => {
      fetch("./games")
      .then((r) => r.json())
      .then((games) => {
        console.log(games)
        setGames(games)
      })
    }, [])



    

    return (
        <div className="game-container">
            {
            games.map((game) => {
                return <GameCard
                key={game.id}
                name={game.name}
                image_url={game.image_url}
                average_score={game.average_score}
                    />
        })}
     </div>
    )
}
export default GameContainer;