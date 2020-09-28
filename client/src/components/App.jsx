import React from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

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
      <Wrapper>
        <div className={display}>
          <Title>
            React is Working my Friends
          </Title>
        </div>
      </Wrapper>
    );
  }
}

export default App;
