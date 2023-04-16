import React from "react";
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Link, NavLink, Switch } from 'react-router-dom';
// import GameCard from "./GameCard";
// import GameContainer from "./GameContainer";
// import Home from "./Home";
// import Register from "./Register";
// import Login from "./Login";
import { NavLink } from "react-router-dom"

function Navbar() {

return (
    <navbar>
        <ul>
            <li exact path="/" >Home</li>
            {/* <link>Games</link> */}
            <li path="/login">Login</li>
            <li path="/register">Register</li>
            {/* <li path="/games" component={GameContainer}></li>
            <li path="/game" component={GameCard}></li> */}
        </ul>
    </navbar>


        // <Router>
        //     <Switch>
        //     <NavLink>
        //               <li><Link exact path="/" component={Home}>Home</Link></li>
        //               {/* <li><a onClick={logout}>Log Out</a></li> */}
        //               <li><Link patch="/games" component={GameContainer}>Games</Link></li>
        //             {/* </NavLink> :
        //             <NavLink> */}
        //               <li><Link path="/login" component={Login}>Login</Link></li>
        //               <li><Link path="/register" component={Register}>Signup</Link></li>
        //             </NavLink>
                  
        //     </Switch>
                   
        // </Router>

        // <div className="navbar">
        //     <NavLink exact path="/">
        //         Home
        //     </NavLink>
        //     <NavLink path="/games">
        //         Games
        //     </NavLink>
        //     <NavLink path="/addgame">
        //         Add Game
        //     </NavLink>
        //     <NavLink path="/login">
        //         Login
        //     </NavLink>
        //     <NavLink path="/register">
        //         Register
        //     </NavLink>
            
        // </div>

)
}

export default Navbar;