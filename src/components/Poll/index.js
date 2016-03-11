import React, { PropTypes } from 'react'
import Answer, { answerShape } from 'components/Answer'
import styles from './styles.scss'

const pollShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  total_click_count: PropTypes.number.isRequired,
  answers: PropTypes.arrayOf(answerShape).isRequired,
  answered_question: PropTypes.number,
})

export class Poll extends React.Component {
  static propTypes = {
    poll: pollShape,
    castVote: PropTypes.func.isRequired
  }

  render () {
    const {
      poll,
      castVote
    } = this.props

    const {
      id,
      question,
      image_url,
      total_click_count,
      answers,
      answered_question
    } = poll

    return (
      <div className={styles.poll}>
        <h3 className={styles.pollHeading}>{question} <span className={styles.pollVoteCount}>{total_click_count}</span></h3>
        {image_url && <img src={image_url} className={styles.pollImage} />}
        {answers.map(answer =>
          <Answer
            key={answer.id}
            answer={answer}
            castVote={castVote}
            shouldDisplayResults={answered_question !== null}
            userAnswer={answered_question}
            totalVotes={total_click_count}
          />
        )}
      </div>
    )
  }
}

export default Poll
