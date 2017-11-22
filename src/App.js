import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './box.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: []
    }
    this.constructGrid= this.constructGrid.bind(this);
    this.constructGrid();
    this.state.grid[5][5]=true;
  }

  render() {
    var boxes = [];
    for(var i = 0; i < 10; i++)
    {
      for(var j = 0; j < 10; j++)
      {
        boxes.push(<Box isBlue={this.state.grid[i][j]}/>);
      }
      boxes.push(<br />);
    }

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }

  constructGrid(){
    var tempGrid= []
    for(var i = 0; i < 10; i++)
    {
      tempGrid[i]= [];
      for(var j = 0; j < 10; j++)
      {
        tempGrid[i][j]=false;
      }
      tempGrid.push(<br />);
    }
    
    this.state={grid:tempGrid}  

  }
}

export default App;
