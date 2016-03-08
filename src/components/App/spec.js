import createRenderer from '../../helper';
import { App } from './';

const render = createRenderer(App);

describe('<App />', () => {
  it('should have a correct title', () => {
    const { output } = render({
      title: 'Hello world!'
    });

    const subject = output.querySelector('h1').textContent;
    const expectation = 'Hello world!';

    expect(subject, 'has title').to.equal(expectation);
  });
});
