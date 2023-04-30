import React from 'react';
import './App.css';
import GameContainer from './GameContainer';
import Home from './Home';




function App() {


  return (


      <div className="App">
        <h1 className="heading">Game Reviews</h1>
        <Home />
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
