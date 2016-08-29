import React, {Component} from 'react';

export default class Score extends Component {
  constructor(props) {
    super(props);
  }

  listScores () {
    return this.props.scores.map((elem) => {
      return (<tr className="row"><td className="row">{elem.word}</td><td className="row">{elem.score}</td></tr>)
    });
  }

  totalScore () {
    let total = 0;
    this.props.scores.forEach((elem) => {
      total += elem.score;
    })
    return total;
  }

  render() {
    return(
      <div className="score-table">
      <table>
        <thead>
          <tr className="row">
            <th className="row">Word</th>
            <th className="row">Score</th>
          </tr>
        </thead>
        <tbody>
        	{this.listScores()}
      	<tr className="row">
            <td className="total-row"><span>Total</span></td>
            <td className="total-row"><span>{this.totalScore()}</span></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }

}
