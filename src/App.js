import { render } from "@testing-library/react";
import React from "react";
import "./App.css";


function App () {
  render() 
  return this.state.score < 100 ? (
  
      <main>
        <p>React State Lab</p>
        <p></p>
        
      </main>
    
  
  

  
  };
    upgrade() 
  if(this.state.score >= 10){
        this.setState({ addButton: this.state.addButton + 1});
        this.setState({score: this.state.score - 10});
 }else {
  alert("You can't afford that!");
 }
 
    increment() 
      this.setState({score: this.state.score + this.state.addButton});

restart () 
  console.log("restarting");
  this.setState({score: 0});
  this.setState({addButton: 1});


    <main>

      <h1>Current Score: {this.state.score}</h1>
      <button onClick={()=> this.increment()}>+{this.state.addButton}</button>
      <button onClick={()=> this.upgrade()}>
        Pay 10 points to change from + {this.state.addButton} to +
        {this.state.addButton + 1}

      </button>
    </main>
    (

    <main>

      <h1>{this.state.score}</h1>
      <h2>You Win!</h2>
      <button onClick={() => this.restart()}>Play again?</button>
    </main>
    );
    

export default App;
