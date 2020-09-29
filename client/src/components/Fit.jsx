import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Fit({ rating }) {
  const [score] = useState((rating / 1) * 100);

  return (
    <Wrapper>

      <Title>Overall Fit Rating</Title>
      <Slider>
        <ValueBox inputWidth={score} />
        <Divider />

      </Slider>

      <SmallTag>Runs Small</SmallTag>
      <LargeTag>Runs Large</LargeTag>
    </Wrapper>
  );
}

Fit.propTypes = {
  rating: PropTypes.string.isRequired,
};

const Slider = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 8px;
  border: 1px solid #ccc;
  opacity: 0.7;
  margin-bottom: 5px;
`;

const ValueBox = styled.div`
  position: absloute;
  background-color: #2b6692;
  height: 12px;
  width: 12px;
  top: 0;
  left: -6px;
  display: block;
  margin-top: -2px;
  z-index: 2;
  margin-left: ${(props) => props.inputWidth || '0'}%;
  box-shadow: inset 1px 0 0 rgba(255,255,255,.5),inset -1px 0 0 rgba(0,0,0,.25);
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%)
`;
const SmallTag = styled.span`
  font-size: 12px;
  float: left;
`;

const LargeTag = styled.span`
  font-size: 12px;
  float: right;
  text-align: right;
`;
const Wrapper = styled.div`
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif!
`;
const Title = styled.h2`
  display: block!important;
  margin-bottom: .5em!important;
  font-size: 15px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
`;
const Divider = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 12px;
  border-right: 1px solid #666;
  margin: -2px 0 0 -1px;
  opacity: 0.7;
  z-index: 0;
`;

export default Fit;
