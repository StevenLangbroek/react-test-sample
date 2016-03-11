import React, { PropTypes } from 'react';
import fn from '../../utils/fn';

export const answerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  click_count: PropTypes.number.isRequired,
  correct: PropTypes.bool,
});

export class Answer extends React.Component {
  static propTypes = {
    answer: answerShape,
    answeredQuestion: PropTypes.number.isRequired,
    castVote: PropTypes.func.isRequired,
    shouldDisplayResults: PropTypes.bool,
    totalVotes: PropTypes.number,
  };

  constructor(props, context) {
    super(props, context);

    this.renderQuestion = this.renderQuestion.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  renderResult() {
    // TODO: Determine answer weight and build width based on that
    // TODO: Is this the answer given, if so: add extra class
    return (
      <div className="answer answer--result">
        {text}
      </div>
    )
  }

  renderQuestion() {
    const {
      castVote,
      answer
    } = this.props;

    return (
      <a href="#" className="answer" onClick={fn(castVote, answer)}>
        {answer.text}
      </a>
    );
  }

  render() {
    const {
      answer,
      answeredQuestion,
      castVote,
      shouldDisplayResults,
      totalVotes
    } = this.props;

    return shouldDisplayResults
      ? this.renderResult()
      : this.renderQuestion();
  }
}

export default Answer;
