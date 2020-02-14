import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      row0: ['-', '-', '-'],
      row1: ['-', '-', '-'],
      row2: ['-', '-', '-'],
      winnnigPlayer: '',
      currentPlayer: 'X',
      gameOver: false
    }
    this.toggle = this.toggle.bind(this);
    this.clickable - this.clickable.bind(this);
  }



  componentDidMount() {
    document.title = 'TIC TAC TOE';
  }

  componentDidUpdate() {
    const {row0, row1, row2, gameOver} = this.state;

    if (gameOver) {
      return;
    }

    const board = [row0, row1, row2];
    //if the fields of any row are the same and not empty
    board.forEach(row => {
      if (row[0] !== '-' && row[0] === row[1] && row[1] === row[2]) {
        this.setState({winnnigPlayer: row[0], gameOver: true})
      }
    });

    //if the fields of any column are the same and not empty
    for (let column = 0; column < 3; column++) {
      if (row0[column] !== '-' && row0[column] === row1[column] && row1[column] === row2[column]) {
        this.setState({winnnigPlayer: row0[column], gameOver: true})
        return;
      }
    }
    //checking the diagonals
    if ((row0[0] !== '-' && row0[0] === row1[1] && row1[1] === row2[2]) || (row0[2] !== '-' && row0[2] === row1[1] && row1[1] === row2[0])) {
      this.setState({winnnigPlayer: row1[1], gameOver: true})
    }
  }

  clickable(row, column) {
    console.log('click')
    // if (this.state[row][column] === '-' && this.state.winnnigPlayer === '') {
    //   this.setState(state => {
    //     const newRow = [...state[row]];
    //     newRow[column] = state.currentPlayer;
    //     // const obj = {};
    //     // obj[row] = newRow; // dynamic property name
    //     return {
    //       [row]: newRow,
    //       currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
    //     }
    //   });
    // }
  }

  toggle(row, column) {
    console.log('toggled')
    //if (this.state[row][column] === '-' && this.state.winnnigPlayer === '') {
    //   this.setState(state => {
    //     const newRow = [...state[row]];
    //     newRow[column] = state.currentPlayer;
    //     // const obj = {};
    //     // obj[row] = newRow; // dynamic property name
    //     return {
    //       [row]: newRow,
    //       currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
    //     }
    //   });
    // }
  }

  

  render() {
    const rows = [0,1,2].map(num => <Row row={`row${num}`} values={this.state[`row${num}`]} clickable={this.clickable} toggle={this.toggle}/>);

    
    return (
      <div>
       {this.state.winnnigPlayer !== '' && 
        <h1>
          {this.state.winnnigPlayer} wins!
        </h1>
      }
      {rows}
      </div>
    )
  }
}

const Row = (props) => {
  return (
    <div>
    <Box row={props.row} column={0} value={props.values[0]} clickable={props.clickable} toggle={props.toggle}/>
    <Box row={props.row} column={1} value={props.values[1]} clickable={props.clickable} toggle={props.toggle}/>
    <Box row={props.row} column={2} value={props.values[2]} clickable={props.clickable} toggle={props.toggle}/>
  </div>
  );
};

const Box = (props) => {
  return (
    <button className='box' onClick={() => props.clickable(props.row, props.column)} onClick={() => props.toggle(props.row, props.column)}>{props.value}</button>
  )
};


export default App;











  // clickable(row,column){
  //   console.log('clicked')
  //   if(this.state[row][column]=== '-' && !this.state[row+1][column] || this.state[row][column]=== '-' && this.state[row+1][column] !== '-' ) {
  //          console.log('This is a clickable field', this.state[row][column])
  //        }
  // }