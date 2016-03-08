import createRenderer from '../../helper';
import { App } from './';

const render = createRenderer(App);

describe('<App />', () => {
  it('should equal true', () => {
    const { output } = render({
      title: 'Hello world!'
    });

    const subject = output.querySelector('h1').textContent;

    expect(subject, 'has title').to.equal('Hello world!');
  });
});
