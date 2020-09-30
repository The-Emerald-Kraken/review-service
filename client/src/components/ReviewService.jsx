/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Review from './Review.jsx';
import LoadMore from './LoadMore.jsx';

function ReviewService() {
  const [display, setDisplay] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const [show, setShow] = useState(true);

  // did comopoent mount replacement

  const useFetchData = (requests, id) => {
    axios.get(`/api/products/reviews/${id}/${requests}`)

      .then(({ data }) => setReviews(data))

      .catch((err) => (err));
  };

  const usePatchData = (selected, id) => {
    axios.patch(`/api/products/reviews/${selected}/${id}`)
      .then(() => useFetchData(display, currentItem))
      .catch((err) => err);
  };

  useEffect(() => {
    useFetchData(display, currentItem);
  });

  // did compoenet update replacement
  useEffect(() => {
    if (show) {
      useFetchData(display, currentItem);
    }
  }, [display || currentItem]);

  return (
    <Wrapper>
      <Title>Reviews</Title>
      <ul>
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review}
            patchData={usePatchData}
          />
        ))}
      </ul>
      {show ? (
        <LoadMore
          changeDisplay={setDisplay}
          currentDisplay={display}
        />
      ) : null}
    </Wrapper>
  );
}

const Title = styled.h1`
margin-left: 2em;
font-size: 1.25em;
color: Black;
font-family: Stuart,Georgia,serif;
`;

const Wrapper = styled.section`
padding: 4em;
background: whitesmoke;
width: 50%;
margin: auto
`;

export default ReviewService;
