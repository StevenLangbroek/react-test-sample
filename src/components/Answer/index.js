import React, { PropTypes } from 'react'
import fn from 'utils/fn'
import styles from './styles.scss'
import cn from 'class-name';

export const answerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  click_count: PropTypes.number.isRequired,
  correct: PropTypes.bool,
})

export class Answer extends React.Component {
  static propTypes = {
    answer: answerShape,
    userAnswer: PropTypes.number,
    castVote: PropTypes.func.isRequired,
    shouldDisplayResults: PropTypes.bool,
    totalVotes: PropTypes.number,
  };

  constructor (props, context) {
    super(props, context)

    this.renderOption = this.renderOption.bind(this)
    this.renderResult = this.renderResult.bind(this)
  }

  renderResult () {
    // TODO: Determine answer weight and build width based on that
    // TODO: Is this the answer given, if so: add extra class
    const {
      userAnswer,
      answer
    } = this.props

    const userGaveThisAnswer = (userAnswer === answer.id)

    return userGaveThisAnswer ? (
      <div className={cn(styles.answer, styles.answerResult, styles.answerGiven)}>
        {answer.text} - <strong>You and {answer.click_count - 1} more.</strong>
      </div>
    ) : (
      <div className={cn(styles.answer, styles.answerResult)}>
        <strong>{answer.click_count}</strong> {answer.text}
      </div>
    )
  }

  renderOption () {
    const {
      castVote,
      answer
    } = this.props

    return (
      <a href='#' className={cn(styles.answer, styles.answerOption)} onClick={fn(castVote, answer)}>
        {answer.text}
      </a>
    )
  }

  render () {
    const {
      answer,
      userAnswer,
      castVote,
      shouldDisplayResults,
      totalVotes
    } = this.props

    return shouldDisplayResults
      ? this.renderResult()
      : this.renderOption()
  }
}

export default Answer