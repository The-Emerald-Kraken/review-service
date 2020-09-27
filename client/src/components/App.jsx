import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'foo',
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className={display}>
        <h1>React is Working my Friends</h1>
      </div>
    );
  }
}

export default App;
