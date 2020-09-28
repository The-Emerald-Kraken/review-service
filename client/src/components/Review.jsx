import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => (
  <div>
    <hr />
    <p>{review.title}</p>
    <p>{review.nickname}</p>
    <p>{review.rating}</p>
    <p>{review.body}</p>
    {/* <img alt="'alt'" src={review.images[0].url} /> */}
  </div>
);

Review.propTypes = {
  review: PropTypes.shape().isRequired,
};

export default Review;
