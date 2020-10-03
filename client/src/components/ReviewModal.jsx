import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ReviewModal({ img, showReviewModal, onClose }) {
  const h = ['Shorter than 5\'', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', 'Taller than 6\'5"'];
  const w = ['Less than 100 lbs', '100 - 125 lbs', '125 - 150 lbs', '175 - 200 lbs', '200 - 225 lbs', '225 - 250 lbs', '250 - 275 lbs', '275 - 300 lbs', '300 - 325 lbs', '325 - 350 lbs', '350 - 375 lbs', '375 - 400 lbs', 'More than 400 lbs'];
  const tags = ['Shirt', 'Pratical', '#streetWear', 'JinSwagg', 'Snoop'];
  const age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
  const fit = [0, 0.5, 1];
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

      <Content>
        <form onSubmit={() => (console.log('HelloWorld'))}>
          <Content>
            <TitleField>My Review for REI Co-op Men's Sahara Plaid Long-Sleeve Shirt</TitleField>
          </Content>
          <Content>
            <label htmlFor="Product Rating">
              <TitleField>Product rating*</TitleField>
              <input type="radio" name="rating" value={1} />
              <input type="radio" name="rating" value={2} />
              <input type="radio" name="rating" value={3} />
              <input type="radio" name="rating" value={4} />
              <input type="radio" name="rating" value={5} />
            </label>
          </Content>
          <Content>

            <TitleFieldBlock>Review title*</TitleFieldBlock>
            <input type="text" name="title" placeholder="Example: Great on trails!" />

          </Content>
          <Content>

            <TitleFieldBlock>Review*</TitleFieldBlock>
            <Textarea type="text" name="body" placeholder="Please keep your review focused on the product and your experience with it. Your review is so important for improving REI and the experience for other REI shoppers!" />

          </Content>
          <Content>
            <TitleField>Would you recommend this product to a friend?</TitleField>
            <input type="radio" name="recc" value="yes" />
            <input type="radio" name="recc" value="no" />
          </Content>
          <Content>
            <TitleField>Overall Fit</TitleField>
            {fit.map((f) => <input key={f} type="radio" name="fit" value={f} />)}
          </Content>
          <Content>
            <TitleField>Best for:</TitleField>
            {tags.map((t) => <input key={t} type="radio" name="tag" value={t} />)}

          </Content>
          <Content>
            <TitleField>Height</TitleField>
            <select name="height">
              <option disabled hidden selected>Select</option>
              {h.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </select>
          </Content>
          <Content>
            <TitleField>Weight Range</TitleField>
            <select name="weight">
              <option disabled hidden selected>Select</option>
              {w.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </select>
          </Content>
          <Content>
            <TitleField>Age</TitleField>
            <select name="weight">
              <option disabled hidden selected>Select</option>
              {age.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </select>
          </Content>
          <Content>
            <ContentInline>
              <TitleFieldBlock>Nickname*</TitleFieldBlock>
              <input type="text" name="nickname" placeholder="Example: jackie27" />
            </ContentInline>
            <ContentInline>
              <TitleFieldBlock>Location</TitleFieldBlock>
              <input type="text" name="Location" placeholder="Example: Seattle, WA" />
            </ContentInline>
          </Content>
          <Content>
            <TitleFieldBlock>Email*</TitleFieldBlock>
            <input type="email" name="email" placeholder="Example: youremail@example.com" />
          </Content>
          <Content><PostButton>Post Review</PostButton></Content>

        </form>
      </Content>
    </Modal>
  );
}

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  showReviewModal: PropTypes.bool.isRequired,
  img: PropTypes.shape().isRequired,
};
const TitleField = styled.h3`
    line-height: 1.5em!important;
    resize: vertical!important;
    display: inline-block!important;
    line-height: 20px!important;
`;
const TitleFieldBlock = styled.h3`
    line-height: 1.5em!important;
    resize: vertical!important;
    display: block!important;
    line-height: 20px!important;
`;
const Modal = styled.div`
font-family: inherit;
display: grid;
width: 90%;
max-width: 900px;
margin: 0, auto;
position: absolute;
top: 25%;
left: 32%;
z-index: 10;
padding: 100px
height: auto;
background-color: #e5e5e5;
grid-template-columns: repeat(3, 1fr);
box-shadow: 0 10px 25px rgba(0,0,0,.5);
  `;
const Textarea = styled.textarea`
overflow-wrap: break-word;
overflow: hidden !important;
height: 89.9884px !important;
border-radius: .25em .25em 0 0!important;
    background-color: transparent!important;
    border-bottom: 1px solid #ccc!important;
    margin: 0!important;
    border-color: transparent!important;
    line-height: 1.5em!important;
    resize: vertical!important;
    display: inline-block!important;
    width: 100%;
`;
const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: white;
  display: block;
`;
const ContentInline = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: white;
  display: inline-block;
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
            background - color: transparent;
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
            background - color: #2b455c;
    border-color: #2b455c;
  }
`;

export default ReviewModal;
