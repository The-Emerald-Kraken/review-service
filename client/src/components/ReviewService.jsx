/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Review from './Review.jsx';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
margin-left: 2em;
font-size: 1.25em;
color: Black;
font-family: Arial, Helvetica, sans-serif;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: whitesmoke;
width: 50%;
margin: auto
`;

class ReviewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 10,
      reviews: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const { display } = this.state;
    this.fetchData(display, 1);
  }

  fetchData(requests, id) {
    axios.get(`/api/products/reviews/${id}`)
      .then(({ data }) => this.setState(
        { reviews: data },
      ));
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
            />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default ReviewService;
