// Will contain the compoent button to load more reviews upond click
// will use a GET request
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function LoadMore({ changeDisplay, currentDisplay }) {
  const [display, setDisplay] = useState(currentDisplay);

  useEffect(() => {
    changeDisplay(display);
  }, [display]);

  return (
    <Button onClick={() => setDisplay(display + 5)}>Load More</Button>
  );
}

LoadMore.propTypes = {
  currentDisplay: PropTypes.number.isRequired,
  changeDisplay: PropTypes.func.isRequired,
};

const Button = styled.button`
  position: relative!important;
  display: block;
  text-align: center;
  margin: 10px auto;
  width: 33%;
  float: none;
  background-color: white;
  border: 1px solid grey;
  border-radius: 2px;
  padding: 5px 14px;
  font-family: Arial,Helvetica,'Bitstream Vera',sans-serif;
  line-height: 20px;
  font-size: 14px;
  color: #000;
  background-color: #ededed;
  &:hover {
    box-shadow: inset 0 0 1.5px #000000;
  }
`;

export default LoadMore;
