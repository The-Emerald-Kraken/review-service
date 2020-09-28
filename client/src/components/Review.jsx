import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
display: flex;
font-family: Arial, Helvetica, sans-serif;
border-bottom: groove;
`;
const FlexContainer = styled.div`
  margin: 10px;
  padding: 20px;

`;

const Review = ({ review }) => (
  <Wrapper>

    <FlexContainer>
      <p>{review.nickname}</p>
      <p>{review.location}</p>
    </FlexContainer>
    <FlexContainer>
      <p>{review.rating}</p>
      <p>{review.title}</p>
      <p>{review.body}</p>
      <p>{review.images[0] ? <img src={review.images[0].url} alt="description" /> : null}</p>
    </FlexContainer>
    <FlexContainer>
      <p>{review.fit}</p>
    </FlexContainer>

  </Wrapper>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
};

export default Review;
