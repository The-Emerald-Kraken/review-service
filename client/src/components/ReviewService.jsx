/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Review from './Review.jsx';
import LoadMore from './LoadMore.jsx';

class ReviewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 1,
      reviews: [],
      currentItem: 1,
      show: true,
    };
    this.fetchData = this.fetchData.bind(this);
    this.patchData = this.patchData.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  componentDidMount() {
    const { display, currentItem } = this.state;
    this.fetchData(display, currentItem);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      display, currentItem, show,
    } = this.state;
    if (show) {
      if (display !== prevState.display || currentItem !== prevState.currentItem) {
        this.fetchData(display, currentItem);
      }
    }
  }

  changeDisplay(n) {
    this.setState({
      display: n,
    });
  }

  fetchData(requests, id) {
    axios.get(`/api/products/reviews/${id}/${requests}`)
      .then(({ data }) => this.setState(
        { reviews: data },
      ))
      .catch((err) => (err));
  }

  patchData(selected, id) {
    const { display, currentItem } = this.state;
    axios.patch(`/api/products/reviews/${selected}/${id}`)
      .then(() => this.fetchData(display, currentItem))
      .catch((err) => err);
  }

  render() {
    const { reviews, display, show } = this.state;
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
        {show ? (
          <LoadMore
            changeDisplay={this.changeDisplay}
            currentDisplay={display}
          />
        ) : null}
      </Wrapper>
    );
  }
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
