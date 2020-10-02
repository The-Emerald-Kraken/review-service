/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import Review from './Review.jsx';
import LoadMore from './LoadMore.jsx';
import ReviewStatsContainer from './ReviewStatsContainer.jsx';
import ImgModal from './ImgModal.jsx';

function ReviewService({ start }) {
  const [display, setDisplay] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState({ rating: 0, fit: 0 });
  const [currentItem] = useState(start);
  const [showImgModal, setShowImgModal] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const [sort, setSort] = useState('Most Recent');

  const FetchData = (requests, id) => {
    axios.get(`/api/products/reviews/${id}/${requests}/${sort}`)
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
      .catch((err) => err);
  };

  useEffect(() => {
    FetchAvgData(currentItem);
  }, [currentItem]);

  useEffect(() => {
    FetchData(display, currentItem);
  }, [display]);

  useEffect(() => {
    FetchData(display, currentItem);
  }, [currentItem]);

  useEffect(() => {
    FetchData(display, currentItem);
  }, [sort]);

  if (reviews.length === 0) {
    return <p>Be the first to review this product</p>;
  }
  return (

    <Wrapper>
      <ImgModal image={modalImg} showImgModal={showImgModal} onClose={setShowImgModal} />
      <ReviewStatsContainer avgReview={avg} setSort={setSort} sort={sort} display={display} />
      <ul>
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review}
            patchData={PatchData}
            showImgModal={setShowImgModal}
            setModalImg={setModalImg}
          />
        ))}
      </ul>
      {(avg.count > reviews.length) ? (
        <LoadMore
          changeDisplay={setDisplay}
          currentDisplay={display}
        />
      ) : null}
      {showImgModal ? <PageMask onClick={() => setShowImgModal(false)} /> : null}
    </Wrapper>
  );
}

ReviewService.propTypes = {
  start: PropTypes.number.isRequired,
};

const Wrapper = styled.section`
padding: 4em;
width: 50%;
margin: auto;
font-family: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 400;
letter-spacing: -.016rem;
`;
const PageMask = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default ReviewService;
