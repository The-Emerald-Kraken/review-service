/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';
import Star from './Star.jsx';

const Review = ({ review }) => (
  <FlexContainer>

    <FlexBox>
      <p>{review.nickname}</p>
      <p>{review.location}</p>
    </FlexBox>
    <FlexBox>

      <Wrapper>
        <Star rating={review.rating} />
        {moment(review.createdAt).fromNow()}
      </Wrapper>
      <Title>{review.title}</Title>
      <p>{review.body}</p>
      <p>
        <b>Height </b>
        {review.height}
      </p>
      <p>
        <b>Weight </b>
        {review.weight}
      </p>
      <p>
        <b>Age </b>
        {review.age}
      </p>
      <p>
        <b>Primary Usage </b>
        <Wrapper>
          {review.tags.map((tag) => (`${tag} `))}
        </Wrapper>
      </p>
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

const FlexContainer = styled.section`
display: flex;
font-family: Stuart,Georgia,serif;
font-size: 16px;
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
const Title = styled.h2`
    color: #292929;
    font-size: 19px;
    line-height: 20px;
    font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-style: normal;
    font-weight: 700;
    `;
const Wrapper = styled.span`
  display:inline-block;
`;

export default Review;
