import sinon from 'sinon';
import { Simulate } from 'react-addons-test-utils';
import createRenderer from '../../helper';

import Answer from './';
const render = createRenderer(Answer);

describe('<Answer />', () => {
  it('renders a clickable answer when poll is unanswered', () => {
    const { output } = render({
      answer: {
        id: 1,
        text: 'Vote for Trump!',
        click_count: 2
      },
      shouldDisplayResults: false
    });

    const subject = output.tagName;
    const expectation = 'A';

    expect(subject).to.equal(expectation);
  });
  it('renders results when poll is answered', () => {
    const { output } = render({
      answer: {
        id: 1,
        text: 'Vote for Trump!',
        click_count: 2
      },
      shouldDisplayResults: true,
      userAnswer: 1
    });

    const subject = Array.from(output.classList).indexOf('answer--result') !== -1;

    expect(subject).to.equal(true);
  });
  it('calls castVote when clicked', () => {
    const castVote = sinon.spy();

    const { output, props } = render({
      answer: {
        id: 1,
        text: 'Vote for Trump!',
        click_count: 2
      },
      shouldDisplayResults: false,
      castVote
    });

    Simulate.click(output);

    expect(castVote).to.have.been.calledWith(props.answer);
  });
});
