import React, { Component } from "react";
import './App.css';
import BeyCards from './components/BeyCards/BeyCards'
import beyonce from "./beyonce.json";
import Wrapper from './components/Wrapper/Wrapper'

class App extends Component {
  state = {
    beyonce, 
    score: 0, 
    highScore: 0,
    status: "Click each Bey one time to slay a high score!"
  };

  handleClickedBey = id => {
  
    const beyoncesPicked = this.state.beyonce.filter(beyonce => beyonce.id === id);
    
    //logic for updating scores, status, and shuffling cards will go here 
    
    
  };

  render() {
    return (
        <Wrapper>
          <nav className="nav-container">
            <ul className="nav-elements">
              <li className="each-nav-element">Score: {this.state.score}</li>
              <li className="each-nav-element">High Score: {this.state.highScore}</li>
              <li className="each-nav-element">{this.state.status}</li>
            </ul>
          </nav>
        {this.state.beyonce.map(beyonce => (
          <BeyCards
            handleClickedBey={this.handleClickedBey}
            id={beyonce.id}
            key={beyonce.id}
            name={beyonce.name}
            image={beyonce.image}
          />
        ))}
        <footer className="footer-container">
          <p className="footer-content">
              © 2019 <a className="github-link" href='https://github.com/jenross'>Jennifer Ross</a>
          </p>
        </footer>
      </Wrapper>   
    );
  }
}

export default App;
