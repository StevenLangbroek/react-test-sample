import { scryRenderedComponentsWithType } from 'react-addons-test-utils';

import createRenderer from '../../helper';
import Poll from './';
import Answer from '../Answer';

const render = createRenderer(Poll);

describe('<Poll />', () => {

  it('renders a correct heading', () => {
    const { output, props } = render({
      id: 1,
      question: 'What up?',
      image_url: 'http://placekitten.com/200/300',
      total_click_count: 1,
      answers: [],
      castVote: () => {}
    });

    const subject = output.querySelector('.poll__heading').textContent;
    const expectation = `${props.question} ${props.total_click_count}`;

    expect(subject).to.equal(expectation);
  });

  it('renders an image when provided', () => {
    const { output, props } = render({
      id: 1,
      question: 'What up?',
      image_url: 'http://placekitten.com/200/300',
      total_click_count: 1,
      answers: [],
      castVote: () => {}
    });

    const subject = output.querySelector('.poll__image img').getAttribute('src');
    const expectation = props.image_url;

    expect(subject, 'correct image src').to.equal(expectation);
  });

  it('renders an <Answer /> component for each answer', () => {
    const { component } = render({
      id: 1,
      question: 'What up?',
      image_url: 'http://placekitten.com/200/300',
      total_click_count: 1,
      answers: [
        {
          id: 2,
          text: 'Not much',
          click_count: 2,
          correct: null
        },
        {
          id: 3,
          text: 'Just chillin',
          click_count: 1,
          correct: null
        }
      ],
      castVote: () => {}
    });

    const subject = scryRenderedComponentsWithType(component, Answer).length;
    const expectation = 2;

    expect(subject, 'has 2 Answer components').to.equal(expectation);
  })
});
