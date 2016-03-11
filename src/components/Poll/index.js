import React, { PropTypes } from 'react';
import Answer, { answerShape } from '../Answer';

export class Poll extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    total_click_count: PropTypes.number.isRequired,
    answers: PropTypes.arrayOf(answerShape).isRequired,
    answered_question: PropTypes.number,
    castVote: PropTypes.func.isRequired,
    userDidAnswer: PropTypes.bool,
  };

  render() {
    const {
      id,
      question,
      image_url,
      total_click_count,
      answers,
      answered_question,
      castVote,
      userDidAnswer
    } = this.props;

    return (
      <div className="poll">
        <h3 className="poll__heading">{question} <span className="poll__vote-count">{total_click_count}</span></h3>
        {image_url && <div className="poll__image">
          <img src={image_url} />
        </div>}
        {answers.map(answer =>
          <Answer
            key={answer.id}
            answer={answer}
            castVote={castVote}
            shouldDisplayResults={userDidAnswer}
            userAnswer={answered_question}
            totalVotes={total_click_count}
          />
        )}
      </div>
    );
  }
}

export default Poll;
