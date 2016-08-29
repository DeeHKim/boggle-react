import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class BoggleBoard extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick (item) {
    const {board, clicked} = this.props.store;
    let updatedList = clicked.list;
    let current = this.getLocation(board.matrix, item);
    let prev = this.getLocation(board.matrix, clicked.list[clicked.list.length - 1])
    if(clicked.list.indexOf(item) === -1) {
      if(clicked.list.length === 0) {
        updatedList.push(item);
        this.props.store.updateClickedArray(updatedList);
        this.props.store.addLetter(item.key);
      } else if((Math.abs(current.row - prev.row) === 0 || Math.abs(current.row - prev.row) === 1) && (Math.abs(current.index - prev.index) === 0 || Math.abs(current.index - prev.index) === 1 )) {
        updatedList.push(item);
        this.props.store.updateClickedArray(updatedList);
        this.props.store.addLetter(item.key);
      }
    }else if(clicked.list[clicked.list.length - 1] === item) {
      updatedList.pop();
      this.props.store.updateClickedArray(updatedList);
      this.props.store.removeLetter();
    }
  }

  getLocation (array, item) {
    for(let i = 0; i < array.length; i++) {
      let currentRow = array[i];
      let currentRowIndex = i;
      if(currentRow.indexOf(item) !== -1) {
        return {key: item.key, row: currentRowIndex, index: currentRow.indexOf(item)}
      }
    }
  }

  createBoard () {
    const {board, clicked} = this.props.store;
    let gameBoard = board.matrix.map((array) => {
      return (array).map((elem) => {
        return (
          <Button
          className={'game-button' + (clicked.list.indexOf(elem) > -1 ? ' active' : ' ')}
          onClick={() => {this.buttonClick(elem)}}
          >{elem.key}
          </Button>
        )
      })
    })
    return gameBoard.map((elem) => {
      return (
        <div>
        {elem}
        <br/>
        </div>
      )
    })
  }

  submitWord () {
    const {word, score} = this.props.store;
    let sum = 0;
    for(let i = 0; i < data.length; i++){
      if(word.string === data[i]){
        if(score.words.indexOf(word.string)<0){
          if(word.string.length === 1 || word.string.length === 2){
            sum += 1
          }
          if(word.string.length === 3 || word.string.length === 4){
            sum += 1
          }
          if(word.string.length === 5){
            sum += 2
          }
          if(word.string.length === 6){
            sum += 3
          }
          if(word.string.length === 7){
            sum += 5
          }
          if(word.string.length >= 8){
            sum += 11
          }
          let obj = {
            word: word.string,
            score: sum
          }
          this.props.store.updateScore(obj);
          this.props.store.removeWord();
          this.props.store.removeClickedArray();
          return;
        }
      }
    }
  }

  render() {
    return (
      <div>
      <div className="border">
      {this.createBoard()}
      </div>
      <div className="submit">
      <button onClick={this.submitWord.bind(this)}>Submit Word</button>
      </div>
      <div className="current-word">
      <p><span>Current Word:</span> {this.props.store.word.string} </p>
      </div>
      </div>
    );
  }
}
