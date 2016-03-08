import React, { PropTypes, Component } from 'react';

export class App extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const {
      title
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
