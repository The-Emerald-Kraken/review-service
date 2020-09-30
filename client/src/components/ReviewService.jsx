/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import Review from './Review.jsx';
import LoadMore from './LoadMore.jsx';
import ReviewStatsContainer from './ReviewStatsContainer.jsx';

function ReviewService({ start }) {
  const [display, setDisplay] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState({ rating: 0, fit: 0 });
  const [currentItem] = useState(start);
  const [show] = useState(true);

  // did comopoent mount replacement

  const FetchData = (requests, id) => {
    axios.get(`/api/products/reviews/${id}/${requests}`)
      .then(({ data }) => setReviews(data))
      .catch((err) => (err));
  };
  const FetchAvgData = (request) => {
    axios.get(`/api/products/reviews/avg/${request}`)
      .then(({ data }) => setAvg(data))
      .catch((err) => (err));
  };

  const PatchData = (selected, id) => {
    axios.patch(`/api/products/reviews/${selected}/${id}`)
      .then(() => FetchData(display, currentItem))
      .catch((err) => err);
  };

  useEffect(() => {
    FetchAvgData(currentItem);
  }, [currentItem]);

  useEffect(() => {
    FetchData(display, currentItem);
  }, [display]);

  // did compoenet update replacement
  useEffect(() => {
    if (show) {
      FetchData(display, currentItem);
    }
  }, [display || currentItem]);
  return (
    <Wrapper>
      <ReviewStatsContainer avgReview={avg} />
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

ReviewService.propTypes = {
  start: PropTypes.number.isRequired,
};

const Wrapper = styled.section`
padding: 4em;
background: whitesmoke;
width: 50%;
margin: auto
`;

export default ReviewService;
