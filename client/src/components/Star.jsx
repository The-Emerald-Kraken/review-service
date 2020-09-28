import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StarStyle = styled.div`
color: #c5c5c5;
height: 25px;
width: 65px;

position: relative;
text-shadow: 0 1px 0 #a2a2a2;
&:before {
  content: '★★★★★';
  opacity: .6;
}
&:after{
  content: "★★★★★";
  color: gold;
  text-shadow: 0 1px 0 #ab5414;
  position: absolute;
  z-index: 1;
  display: block;
  left: 0;
  top:0;
  width: ${(props) => props.inputWidth || '0'}%;
  overflow: hidden;
}

`;

function Star({ rating }) {
  const [score] = useState((rating / 5) * 100);
  // useEffect(() => {
  //   function renderStar() {

  //   }
  // });

  return (
    <StarStyle inputWidth={score} />
  );
}

Star.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Star;
