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

      <ContentM>
        <form onSubmit={() => (console.log('HelloWorld'))}>

          <TitleMain>My Review for REI Co-op Men's Sahara Plaid Long-Sleeve Shirt</TitleMain>

          <ContentT>
            <TitleField>Product rating*</TitleField>
            <StarContainer>
              <StarInput type="radio" name="rating" value={1} />
              <Red>★</Red>
            </StarContainer>
            <StarContainer>
              <StarInput type="radio" name="rating" value={2} />
              <Orange>★</Orange>
            </StarContainer>
            <StarContainer>
              <StarInput type="radio" name="rating" value={3} />
              <Yellow>★</Yellow>
            </StarContainer>
            <StarContainer>
              <StarInput type="radio" name="rating" value={4} />
              <LGreen>★</LGreen>
            </StarContainer>
            <StarContainer>
              <StarInput type="radio" name="rating" value={5} />
              <Green>★</Green>
            </StarContainer>
          </ContentT>
          <Content>

            <TitleFieldBlock>Review title*</TitleFieldBlock>
            <input type="text" name="title" placeholder="Example: Great on trails!" />

          </Content>
          <Content>

            <TitleFieldBlock>Review*</TitleFieldBlock>
            <ReviewContent>
              <Textarea type="text" name="body" placeholder="Please keep your review focused on the product and your experience with it. Your review is so important for improving REI and the experience for other REI shoppers!" />
              <ButtonContainer>
                <button>Image</button><button>Video</button>
              </ButtonContainer>
            </ReviewContent>

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
            <Select name="height">
              <option disabled hidden selected>Select</option>
              {h.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </Select>
          </Content>
          <Content>
            <TitleField>Weight Range</TitleField>
            <Select name="weight">
              <option disabled hidden selected>Select</option>
              {w.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </Select>
          </Content>
          <Content>
            <TitleField>Age</TitleField>
            <Select name="weight">
              <option disabled hidden selected>Select</option>
              {age.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
            </Select>
          </Content>

          <ContentInline>
            <TitleFieldBlock>Nickname*</TitleFieldBlock>
            <TextField type="text" name="nickname" placeholder="Example: jackie27" />
          </ContentInline>
          <ContentInline>
            <TitleFieldBlock>Location</TitleFieldBlock>
            <TextField type="text" name="Location" placeholder="Example: Seattle, WA" />
          </ContentInline>

          <ContentInline>
            <TitleFieldBlock>Email*</TitleFieldBlock>
            <TextField type="email" name="email" placeholder="Example: youremail@example.com" />
          </ContentInline>
          <Content><PostButton>Post Review</PostButton></Content>

        </form>
      </ContentM>
    </Modal>
  );
}

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  showReviewModal: PropTypes.bool.isRequired,
  img: PropTypes.shape().isRequired,
};

const StarContainer = styled.div`

  position: relative;
  margin-bottom: 12px;
  color: #666!important;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-color: #ccc #ccc #aaa #eee!important;
  border-width: 1px!important;
  border-style: solid!important;
  box-shadow: 0 1px 0 #fff,inset 0 1px 0 #fff!important;
  border-radius: 4px;
  border-left-color: #d0d0d0!important;
  text-align: center!important;
  width: max-content;
  height: max-content;
  display: inline-block;
  overflow: hidden;

`;


const StarInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
const StarButton = styled.span`
font-family: "Times New Roman", Times, serif;
opacity: 1!important;
font-size: 36px!important;
line-height: 1em!important;
color: #fff!important;
cursor: pointer!important;
padding: 0 4px!important;
-webkit-transition: all .3s cubic-bezier(0.2,.3,.05,1)!important;
-moz-transition: all .3s cubic-bezier(0.2,.3,.05,1)!important;
-o-transition: all .3s cubic-bezier(0.2,.3,.05,1)!important;
transition: all .3s cubic-bezier(0.2,.3,.05,1)!important;

background-color: #ededed!important;
text-shadow: 0 -.05em #b9b9b9!important;
font-weight: 400!important;

`;

const Red = styled(StarButton)`
&:hover {
  background-color: #b43034!important;
  border-color: #b43034!important;
  }
`;
const Orange = styled(StarButton)`
&:hover {
background-color: #de9500!important;
border-color: #de9500!important;
}
`;
const Yellow = styled(StarButton)`
&:hover {
background-color: #ecdb00!important;
border-color: #ecdb00!important;
}
`;
const LGreen = styled(StarButton)`
&:hover {
  background-color: #8ac100!important;
  border-color: #8ac100!important;
}
`;
const Green = styled(StarButton)`
&:hover {
  background-color: #338b2b!important;
  border-color: #338b2b!important;
}
`;

const ButtonContainer = styled.div`
position: relative!important;
clear: both!important;
padding: 0 15px!important;
zoom: 1!important;
white-space: nowrap!important;
`;
const ReviewContent = styled.div`
background-color: #fff!important;
// float: left!important;
width: 100%!important;
margin: 10px 0!important;
// -webkit-border-radius: .25em!important;
border-radius: .25em!important;
border: 1px solid!important;
border-color: #aaa #ccc #ccc!important;
border-style: solid!important;
// -webkit-box-shadow: 0 1px 1px #fff!important;
box-shadow: 0 1px 1px #fff!important;
padding: 0 20px!important;

`;

const TextField = styled.input`
    margin: 10px 0!important;
    width: 100%!important;
    box-sizing: border-box!important;
    float: left!important;

    border: 1px solid!important;
    // border-color: #ccc #ccc #999!important;
    padding: .5em 1em!important;
    font-size: 15px!important;
    // color: #666!important;
    line-height: 1.2em!important;
    background: #fff!important;
    // -webkit-box-shadow: 0 1px 1px #fff!important;
    box-shadow: 0 1px 1px #fff!important;
    // -webkit-border-radius: .25em!important;
    border-radius: .25em!important;
    outline: 0!important;
    text-shadow: 0 1px #fff!important;
    // -webkit-transition: all linear .3s!important;

    transition: all linear .3s!important;
`;
const Select = styled.select`
  float: right;
  outline: 0;
    border-color: #666 #ccc #ccc #ccc;
    box-shadow: 0 1px 0 #fff,inset 1px 0 0 #999;
    box-sizing: border-box;
    font-size: 17px;
    height: 32px;
    line-height: 17px;
    white-space: nowrap;
    text-align: left;
    padding: 0;
    position: relative!important;
    top: -1px;
    left: -1px;
    right: -1px;
    z-index: 1;
    width: 50%;
    border-radius: .25em;
    border-width: 1px;
    border-color: #ccc #ccc #666;
    background-color: #fff;
    margin-left: 36px!important;
    display: inline-block;
`;
const TitleMain = styled.h2`
    padding: 20px 12px;
    font-size: 22px;
    font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-decoration: none;
    text-transform: none;
    zoom: 1;
`;
const TitleField = styled.label`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif!important;
font-size: 16px!important;
font-weight: 700!important;
line-height: 24px!important;
resize: vertical;
display: inline-block;
margin-right: 30px;
`;
const TitleFieldBlock = styled.h3`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif!important;
font-size: 16px!important;
font-weight: 700!important;
line-height: 24px!important;
display: block;

`;
const Modal = styled.div`
font-family: inherit;
display: grid;
width: auto%;
max-width: 1000px;
margin: 0 auto;
position: absolute;
left: 32%;
z-index: 10;
height: auto;
background-color: #e5e5e5;
grid-template-columns: repeat(3, 1fr);
box-shadow: 0 10px 25px rgba(0,0,0,.5);
  `;
const Textarea = styled.textarea`
overflow-wrap: break-word;
overflow: hidden ;
height: 89.9884px ;
border-radius: .25em .25em 0 0;
background-color: transparent;
border-bottom: 1px solid #ccc;
margin: 0;
border-color: transparent;
line-height: 1.5em;
resize: vertical;
display: inline-block;
width: 100%;
border-radius: .25em .25em 0 0!important;
background-color: transparent!important;
border-bottom: 1px solid #ccc!important;
padding: .5em 1em!important;
-webkit-box-sizing: border-box!important;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 15px!important;
`;
const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: white;
  display: block;
  padding: 10px 20px;
  padding-right: 50px;
  zoom: 1;
  border-top: 1px solid #ddd;
  position: relative;
`;
const ContentT = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: transparent;
  display: block;
  padding: 10px 20px;
  padding-right: 50px;
  zoom: 1;
  border-top: 1px solid #ddd;
  position: relative;
`;
const ContentM = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: white;
  display: block;
  margin: 0;
  padding-bottom: 10px;
  zoom: 1;
  border-top: 1px solid #ddd;
  position: relative;
`;
const ContentInline = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: white;
  display: inline-block;
  padding: 0 20px!important;
  zoom: 1;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
  grid-row-start: 1;
  grid-row-end: 14;
  grid-auto-rows: 200px;
  background-color: #e5e5e5;
  margin: 20px!important;
  text-align: center;
`;
const Image = styled.img`
display: block;
margin:0;
width: 165px;
height: 220px;
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
float: left;
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
