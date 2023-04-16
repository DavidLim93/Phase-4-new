import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import GameContainer from './GameContainer';
import GameCard from './GameCard';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import AddGame from './AddGame';
// import {  Switch, Route } from "react-router-dom";
import { BrowserRouter ,Route } from 'react-router-dom';
// import {
//   BrowserRouter as Switch,
//   Route
// } from "react-router-dom";



function App({setGames, games}) {

  function  handleNewGame (newGame) {
    const updatedGames = [...games, newGame];
    setGames(updatedGames)
  }


  return (


      <div className="App">
        <h1 className="heading">Game Reviews</h1>
        {/* <Navbar /> */}
        <Home />
        <AddGame onAddGame={handleNewGame} setGames={setGames} games={games}/>
        <GameContainer />
      </div>  

      // <div>
      //   <Header />
      //   <Navbar />
      //   <BrowserRouter>
      //     <Route exact path="/">
      //       <Home /> 
      //     </Route>
      //     <Route path="/games">
      //       <GameContainer />
      //     </Route>
      //     <Route path="/addgame">
      //       <AddGame onAddGame={handleNewGame}/>
      //     </Route>
      //     <Route path="/login">
      //       <Login />
      //     </Route>
      //     <Route path="/register">
      //       <Register />
      //     </Route>
      //   </BrowserRouter>
      // </div>
       
   
  );
}

export default App;
