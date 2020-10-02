/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';
import Star from './Star.jsx';
import Fit from './Fit.jsx';
import Helpful from './Helpful.jsx';

const Review = ({
  review, patchData, showImgModal, setModalImg,
}) => (
  <FlexContainer>
    <FlexBoxL>
      <p><b>{review.nickname}</b></p>
      <p>{review.location}</p>
    </FlexBoxL>
    <FlexBoxC>
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
        {review.tags.length > 0 ? <b>Primary Usage </b> : null}
        <Wrapper>
          {review.tags.map((tag) => (`${tag} `))}
        </Wrapper>
      </p>
      {review.images.map((image) => (
        <Image
          onClick={() => {
            setModalImg(image);
            showImgModal(true);
          }}
          key={image.id}
          inputSrc={image.url}
        />
      ))}
      <Helpful
        helpfulyes={review.helpful_yes}
        helpfulno={review.helpful_no}
        idd={review._id}
        patchData={patchData}
      />
    </FlexBoxC>
    <FlexBoxR>
      <Title2>Overall Fit Rating</Title2>
      <Fit rating={review.fit} />
    </FlexBoxR>

  </FlexContainer>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
  patchData: PropTypes.func.isRequired,
  showImgModal: PropTypes.func.isRequired,
  setModalImg: PropTypes.func.isRequired,
};

const FlexContainer = styled.section`
display: flex;
//font-family: Stuart,Georgia,serif;
font-size: 16px;
border-bottom: groove;
`;
const FlexBoxL = styled.div`
  margin: 20px;
  margin-top: 0;
  padding: 20px;

`;
const FlexBoxC = styled.div`
position: relative;
  margin: 20px;
  margin-right: 70px;
  margin-left: 70px;
  margin-top: 0;
  padding: 20px;
  padding-bottom:1px
`;
const FlexBoxR = styled.div`
padding-top: 300px;
margin: 10px;
padding: 20px;
padding-top: 90px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.inputSrc});
  position: relative;
  margin-right: 1.5px;
  margin -left: 1.5px;
  margin-bottom: 30px;
`;
const Title = styled.h3`
    color: #292929;
    font-size: 19px;
    line-height: 20px;
    font-style: normal;
    font-weight: 0;
    //font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;

    `;

const Title2 = styled.h2`
  display: block!important;
  margin-bottom: .5em!important;
  font-size: 15px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
`;
const Wrapper = styled.span`
  display:inline-block;
`;

export default Review;
