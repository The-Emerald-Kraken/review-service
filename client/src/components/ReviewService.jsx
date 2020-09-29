/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Review from './Review.jsx';

class ReviewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 10,
      reviews: [],
      currentPage: 2,
    };
    this.fetchData = this.fetchData.bind(this);
    this.patchData = this.patchData.bind(this);
  }

  componentDidMount() {
    const { display, currentPage } = this.state;
    this.fetchData(display, currentPage);
  }

  fetchData(requests, id) {
    axios.get(`/api/products/reviews/${id}`)
      .then(({ data }) => this.setState(
        { reviews: data },
      ))
      .catch((err) => (err));
  }

  patchData(helpful, id) {
    const { display, currentPage } = this.state;
    axios.patch(`/api/products/reviews/${helpful}/${id}`)
      .then(() => this.fetchData(display, currentPage))
      .catch((err) => err);
  }

  render() {
    const { reviews } = this.state;
    return (
      <Wrapper>
        <Title>Reviews</Title>
        <ul>
          {reviews.map((review) => (
            <Review
              key={review._id}
              review={review}
              patchData={this.patchData}
            />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

const Title = styled.h1`
margin-left: 2em;
font-size: 1.25em;
color: Black;
font-family: Stuart,Georgia,serif;;
`;

const Wrapper = styled.section`
padding: 4em;
background: whitesmoke;
width: 50%;
margin: auto
`;

export default ReviewService;
