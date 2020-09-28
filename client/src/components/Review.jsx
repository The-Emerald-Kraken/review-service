import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
font-family: Arial, Helvetica, sans-serif;
`;

const Review = ({ review }) => (
  <Wrapper>
    <hr />
    <p>{review.title}</p>
    <p>{review.nickname}</p>
    <p>{review.rating}</p>
    <p>{review.body}</p>
    {/* <img alt="'alt'" src={review.images[0].url} /> */}
  </Wrapper>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
};

export default Review;
