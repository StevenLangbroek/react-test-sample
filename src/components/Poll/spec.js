import createRenderer from '../../helper';
import Poll from './';

const render = createRenderer(Poll);

describe('<Poll />', () => {
  it('renders an image when provided', () => {
    const { output } = render({
      id: 1,
      question: 'What up?',
      image_url: 'http://placekitten.com/200/300',
      total_click_count: 1,
      answers: [],
      castVote: () => {}
    });

    const subject = output.querySelector('.poll__image img').getAttribute('src');
    const expectation = 'http://placekitten.com/200/300';

    expect(subject, 'correct image src').to.equal(expectation);
  });
});
