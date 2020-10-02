import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ReviewModal({ img, showReviewModal, onClose }) {
  if (!showReviewModal) {
    return null;
  }
  return (
    <Modal>
      {window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })}
      <Button onClick={() => onClose(false)}>X</Button>
      <ImageContainer>
        <Image inputSrc={img.url} />
        {img.description}
      </ImageContainer>
      <Content>My Review for REI Co-op Men's Sahara Plaid Long-Sleeve Shirt</Content>
      <Content>Product rating*</Content>
      <Content>Review title*</Content>
      <Content>Review*</Content>
      <Content>Would you recommend this product to a friend?</Content>
      <Content>Overall Fit</Content>
      <Content>Best for:</Content>
      <Content>Height</Content>
      <Content>Weight Range</Content>
      <Content>Age</Content>
      <Content>Nickname* Location</Content>
      <Content>Email*</Content>
      <Content><PostButton>Post Review</PostButton></Content>
    </Modal>
  );
}

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  showReviewModal: PropTypes.bool.isRequired,
  img: PropTypes.shape().isRequired,
};
const Modal = styled.div`
display: grid;
width: 90%;
max-width: 900px;
margin: 0, auto;
position: absolute;
top: 25%;
left: 40%;
z-index: 10;
padding: 100px
height: auto;
background-color: #e5e5e5;
grid-template-columns: repeat(3, 1fr);
box-shadow: 0 10px 25px rgba(0,0,0,.5);
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
    }
  }
  `;

const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  border:1px solid black;
  background-color: white;
`;
const ImageContainer = styled.div`
  position: relative;
  grid-row-start: 1;
  grid-row-end: 14;
  grid-auto-rows: 200px;
  background-color: #e5e5e5;
`;
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
width: 252px;
height: 334px;
background-size: cover;
background-repeat: no-repeat;
border: none;
background-color: #e5e5e5;
background-image: url(${(props) => props.inputSrc});
`;
const Button = styled.button`
  position: absolute;
  font-family: "Arial Black", Gadget, sans-serif;
  top: 3px;
  right: 3px;
  border: none;
  font-size: 16px;
  text-align: center;
  z-index:100;
  color: black;
  background-color: #767676;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  &:hover{
    background-color: transparent;
    background-color: #fff;
  }
`;
const PostButton = styled.button`
cursor: pointer;
white-space: nowrap;
box-sizing: border-box;
width: auto;
margin-bottom: auto;
margin-left: 0;
float: right;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-style: normal;
  font-weight: 700;
  font-variant: normal;
  text-decoration: none;
  text-transform: none;
  text-shadow: none;
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(255,255,255,.1)),color-stop(1,rgba(255,255,255,0)));
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: -moz-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: -o-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-image: linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  background-color: #426c90;
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.2);
  padding-top: .5em;
  padding-right: 1em;
  padding-bottom: .5em;
  padding-left: 1em;
  -webkit-border-radius: 2px 2px 2px 2px;
  border-radius: 2px 2px 2px 2px;
  border-top-width: 0;
  border-top-style: none;
  border-top-color: transparent;
  border-right-width: 0;
  border-right-style: none;
  border-right-color: transparent;
  border-bottom-width: 0;
  border-bottom-style: none;
  border-bottom-color: transparent;
  border-left-width: 0;
  border-left-style: none;
  border-left-color: transparent;
  &:hover {
    background-color: #2b455c;
    border-color: #2b455c;
  }
`;

export default ReviewModal;
