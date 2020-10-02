import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Star({ rating }) {
  const [score, setScore] = useState((rating / 5) * 100);
  useEffect(() => {
    setScore((rating / 5) * 100);
  });

  return (
    <StarStyle inputWidth={score} />
  );
}

Star.propTypes = {
  rating: PropTypes.number.isRequired,
};

const StarStyle = styled.div`
color: #c5c5c5;
height: 25px;
width: 100px;
font-size: 24px;
position: relative;
text-shadow: 0 1px 0 #a2a2a2;
display:inline-block;margin-right:10px;
&:before {
  content: '★★★★★';
  opacity: .6;
}
&:after{
  font-size: 24px;
  content: "★★★★★";
  color: #3278AE;
  position: absolute;
  display: block;
  left: 0;
  top:0;
  width: ${(props) => props.inputWidth}%;
  overflow: hidden;
}

`;

export default Star;
