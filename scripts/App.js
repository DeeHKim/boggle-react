import React, {Component} from 'react';
import { connect } from 'react-redux';
import BoggleBoard from './BoggleBoard';
import Score from './Score';
import Title from '../specification/title.png';
import * as Actions from '../actions/boardActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.newBoard();
  }

  render() {
    return (
      <div className="board">
        <img src = {Title} className="title"/>
        <BoggleBoard
          store={this.props}
        />
        <Score
          scores={this.props.score.scores}
        />
      </div>
    );
  }
}

export default connect(state => state, Actions)(App);
