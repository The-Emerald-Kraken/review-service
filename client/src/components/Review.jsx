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

const Review = ({ review }) => (
  <FlexContainer>

    <FlexBox>
      <p>{review.nickname}</p>
      <p>{review.location}</p>
    </FlexBox>
    <FlexBox>
      <p>{review.rating}</p>
      <p>{review.title}</p>
      <p>{review.body}</p>
      <p>{review.images[0] ? <img src={review.images[0].url} alt="description" /> : null}</p>
    </FlexBox>
    <FlexBox>
      <Star rating={review.rating} />
    </FlexBox>

  </FlexContainer>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
};

export default Review;
