import React, { PropTypes } from 'react';
import Answer from '../Answer';

const answerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  click_count: PropTypes.number.isRequired,
  correct: PropTypes.bool,
});

export class Poll extends React.Component {
  static propTypes = {
    answers: PropTypes.arrayOf(answerShape).isRequired
  };
  render() {
    const {
      answers
    } = this.props;

    return (
      {answers.map(answer => <Answer key={answer.id} answer={answer} />)}
    );
  }
}

export default Poll;
