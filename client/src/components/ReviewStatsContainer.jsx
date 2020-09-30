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
        <Table>
          <thead>
            <tr>
              <td>Rating Snapshot</td>
            </tr>
            <tr>
              <td>Select a row below to filter reviews.</td>
            </tr>
            <tr>
              <Td3>
                5 ★ <StarBar onClick={()=>console.log('Filter 5')}>
                  <FillBar status={(avgReview[5] / avgReview.count) * 100} />
                </StarBar> {avgReview[5]}
              </Td3>
            </tr>
            <tr>
              <Td3>
                4 ★ <StarBar onClick={()=>console.log('Filter 4')}>
                  <FillBar status={(avgReview[4] / avgReview.count) * 100} />
                </StarBar> {avgReview[4]}
              </Td3>
            </tr>
            <tr>
              <Td3>
                3 ★ <StarBar onClick={()=>console.log('Filter 3')}>
                  <FillBar status={(avgReview[3] / avgReview.count) * 100} />
                </StarBar> {avgReview[3]}
              </Td3>
            </tr>
            <tr>
              <Td3>
                2 ★ <StarBar onClick={()=>console.log('Filter 2')}>
                  <FillBar status={(avgReview[2] / avgReview.count) * 100} />
                </StarBar> {avgReview[2]}
              </Td3>
            </tr>
            <tr>
              <Td3>
                1 ★ <StarBar onClick={()=>console.log('Filter 1')}>
                  <FillBar status={(avgReview[1] / avgReview.count) * 100} />
                </StarBar> {avgReview[1]}
              </Td3>
            </tr>
          </thead>
        </Table>
      </FlexBoxR>

      <FlexBoxL>

        <Table>
          <caption>Average Customer Ratings</caption>
          <thead>
            <tr>
              <td>Overall</td>
              <Td><Star rating={avgReview.rating} /></Td>
              <Td>{avgReview.rating}</Td>
            </tr>
            <tr>
              <Td2>Overall Fit Rating</Td2>
              <Td><Fit rating={String(avgReview.fit)} /></Td>
            </tr>
          </thead>
        </Table>

      </FlexBoxL>

    </FlexContainer>
  </Wrapper>
);

ReviewStatsContainer.propTypes = {
  avgReview: PropTypes.shape().isRequired,
};
const StarBar = styled.div`
position: relative;
display: inline-block;
width: 62%;
height: 8px;
border: 1px solid #ccc;
z-index: 0;
cursor: pointer;
`;
const FillBar = styled.div`

background-color: #2b6692;
background-image: -webkit-linear-gradient(top,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
position: absloute;
height: 12px;
width: ${(props) => props.status || '0'}%;
top: 0;
left: -6px;
display: block;
margin-top: -2px;
z-index: 2;
margin-left: 0;
box-shadow: inset 1px 0 0 rgba(255,255,255,.5),inset -1px 0 0 rgba(0,0,0,.25);
`;

const FlexContainer = styled.section`
  width: 1300px;
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
const Table = styled.table`
tablelayout: auto;

`;
const Td = styled.td`
vertical-align: top;
height: 30px;
width: 50px;

`;
const Td2 = styled.td`
vertical-align: top;
height: 30px;
width: 150px;

`;
const Td3 = styled.td`
vertical-align: middle;
width: 500px;


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
width: 1300px;;
`;
const Title = styled.h1`

font-size: 1.25em;
color: Black;
font-family: Stuart,Georgia,serif;
`;

const ReviewButton = styled.button`
cursor: pointer;
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
