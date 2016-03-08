import createRenderer from '../../helper';
import { App } from './';

const render = createRenderer(App);

describe('<App />', () => {
  it('should have a correct title', () => {
    const { output, props } = render({
      title: 'Hello world!'
    });

    const subject = output.querySelector('h1').textContent;
    const expectation = props.title;

    expect(subject, 'has title').to.equal(expectation);
  });
});
