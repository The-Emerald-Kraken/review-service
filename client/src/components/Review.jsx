/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Star from './Star.jsx';

const FlexContainer = styled.section`
display: flex;
font-family: Arial, Helvetica, sans-serif;
border-bottom: groove;
`;
const FlexBox = styled.div`
  margin: 10px;
  padding: 20px;

`;
const JessesProblem = styled.img`
  width: 150px;
  height: 150px;
  background-size: auto;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.inputSrc});
  position: relative;
  margin-right: 1.5px;
  margin -left: 1.5px;
`;

const Review = ({ review }) => (
  <FlexContainer>

    <FlexBox>
      <p>{review.nickname}</p>
      <p>{review.location}</p>
    </FlexBox>
    <FlexBox>
      <Star rating={review.rating} />
      <p><b>{review.title}</b></p>
      <p>{review.body}</p>
      {review.images.map((image) => <JessesProblem key={image.id} inputSrc={image.url} />)}

    </FlexBox>
    <FlexBox>
      Placeholder for Fit
    </FlexBox>

  </FlexContainer>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
};

export default Review;

// { <p>
// {review.images[0] ? <img src={review.images[0].url} alt="description" /> : null}
// </p> }