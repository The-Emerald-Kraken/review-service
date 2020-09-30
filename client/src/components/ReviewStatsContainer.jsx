/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Star from './Star.jsx';
import Fit from './Fit.jsx';

const ReviewStatsContainer = ({ avgReview }) => (
  <Wrapper>
    <Title>Reviews</Title>
    <ReviewButton>Write a review</ReviewButton>
    <FlexContainer>

      <FlexBoxR>

        <p>avgReview.rating</p>
      </FlexBoxR>

      <FlexBoxL>

        <table>
          <caption>Average Customer Ratings</caption>
          <thead>
            <tr>
              <td>Overall</td>
              <td><Star rating={avgReview.rating} /></td>
              <td>{avgReview.rating}</td>
            </tr>
            <tr>
              <td>Overall Fit Rating</td>
              <td><Fit rating={String(avgReview.fit)} /></td>
            </tr>
          </thead>
        </table>

      </FlexBoxL>

    </FlexContainer>
  </Wrapper>
);

ReviewStatsContainer.propTypes = {
  avgReview: PropTypes.shape().isRequired,
};

const FlexContainer = styled.section`
  box-sizing: content-box;
  display: flex;
  font-family: Stuart,Georgia,serif;
  font-size: 16px;
  border-bottom: groove;
  justify-content: space-between;
  padding-top: 16px;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-bottom: 20px;
`;
const FlexBoxL = styled.div`
  margin: 20px;
  padding: 20px;
`;
const FlexBoxR = styled.div`
  margin-top: 1000px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  width: 600px;
`;

const Wrapper = styled.div`
display: block;
`;
const Title = styled.h1`

font-size: 1.25em;
color: Black;
font-family: Stuart,Georgia,serif;
`;

const ReviewButton = styled.button`
white-space: nowrap;
box-sizing: border-box;
width: auto;
margin-bottom: auto;
margin-left: 0;
float: right;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-style: normal;
  font-weight: 700;
  font-variant: normal;
  text-decoration: none;
  text-transform: none;
  text-shadow: none;
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(255,255,255,.1)),color-stop(1,rgba(255,255,255,0)));
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: -moz-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: -o-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-color: #426c90;
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.2);
  padding-top: .5em;
  padding-right: 1em;
  padding-bottom: .5em;
  padding-left: 1em;
  -webkit-border-radius: 2px 2px 2px 2px;
  border-radius: 2px 2px 2px 2px;
  border-top-width: 0;
  border-top-style: none;
  border-top-color: transparent;
  border-right-width: 0;
  border-right-style: none;
  border-right-color: transparent;
  border-bottom-width: 0;
  border-bottom-style: none;
  border-bottom-color: transparent;
  border-left-width: 0;
  border-left-style: none;
  border-left-color: transparent;
  &:hover {
    background-color: #2b455c;
    border-color: #2b455c;
  }
`;

export default ReviewStatsContainer;
