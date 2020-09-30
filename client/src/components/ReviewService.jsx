/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Review from './Review.jsx';
import LoadMore from './LoadMore.jsx';
import ReviewStatsContainer from './ReviewStatsContainer.jsx';

function ReviewService() {
  const [display, setDisplay] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [currentItem] = useState(1);
  const [show] = useState(true);

  // did comopoent mount replacement

  const FetchData = (requests, id) => {
    axios.get(`/api/products/reviews/${id}/${requests}`)
      .then(({ data }) => setReviews(data))
      .catch((err) => (err));
  };

  const PatchData = (selected, id) => {
    axios.patch(`/api/products/reviews/${selected}/${id}`)
      .then(() => FetchData(display, currentItem))
      .catch((err) => err);
  };

  useEffect(() => {
    FetchData(display, currentItem);
  });

  // did compoenet update replacement
  useEffect(() => {
    if (show) {
      FetchData(display, currentItem);
    }
  }, [display || currentItem]);

  return (
    <Wrapper>
      <ReviewStatsContainer avgReview={reviews} />
      <ul>
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review}
            patchData={PatchData}
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

const Wrapper = styled.section`
padding: 4em;
background: whitesmoke;
width: 50%;
margin: auto
`;

export default ReviewService;
