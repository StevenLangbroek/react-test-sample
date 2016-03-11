/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPoll, castVote } from 'redux/modules/poll'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import Poll from 'components/Poll'

const POLL_ID = 3725090

const isLoaded = (poll, user) => (poll.$didFetch && user.$didFetch)

export class HomeView extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    poll: PropTypes.object.isRequired,
    fetchPoll: PropTypes.func.isRequired,
    castVote: PropTypes.func.isRequired,
  };

  componentWillReceiveProps ({ user }) {
    const { fetchPoll } = this.props
    if (!this.props.user.user && user && user.user) {
      fetchPoll(POLL_ID)
    }
  }

  render () {
    const {
      user,
      poll,
      castVote
    } = this.props

    const vote = (poll) => (answer) => castVote(poll, answer)

    return (
      <div className='container text-center'>
        {isLoaded(user, poll) ? <Poll poll={poll.entities[POLL_ID]} castVote={vote(poll.entities[POLL_ID])} /> : <p>Loading!</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  poll: state.poll
})
export default connect((mapStateToProps), {
  fetchPoll,
  castVote
})(HomeView)
