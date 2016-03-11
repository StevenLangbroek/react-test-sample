import React, { PropTypes } from 'react';

export const answerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  click_count: PropTypes.number.isRequired,
  correct: PropTypes.bool,
});

export class Answer extends React.Component {
  static propTypes = {
  };

  render() {
    return (<div>MyComponent</div>);
  }
}

export default Answer;
