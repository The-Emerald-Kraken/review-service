import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImgModal({ image, showImgModal, onClose }) {
  if (!showImgModal) {
    return null;
  }
  return (
    <Modal>
      <Content>
        <Image inputSrc={image.url} />
        <Description>{image.description}</Description>
      </Content>

        <Button onClick={() => onClose(false)}>X</Button>

    </Modal>
  );
}

ImgModal.propTypes = {
  image: PropTypes.shape().isRequired,
  onClose: PropTypes.func.isRequired,
  showImgModal: PropTypes.bool.isRequired,
};
const Modal = styled.div`
  margin: 0, auto;
  position: absolute;
  top: 25%;
  left: 40%;
  z-index: 10;
  height: auto;
  width: auto;
  background-color: #000;
  box-shadow: 0 10px 25px rgba(0,0,0,.5);
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
    }
  }
  `;

const Content = styled.div`
  color: white;
  left: 40%;
  padding: 1rem;
`;
const Image = styled.img`
background-attachment: scroll;
width: 500px;
height: 500px;
margin: auto;
position: relative;
top: 50%;
left: 20%;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${(props) => props.inputSrc});
`;
const Description = styled.p`
  text-align: center;
`;
const Button = styled.button`
  position: absolute;
  font-family: "Arial Black", Gadget, sans-serif;
  top: 3px;
  right: 3px;
  border: none;
  font-size: 16px;
  text-align: center;
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

export default ImgModal;

// body {
//   background: #eee;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

//   .actions {
//     border-top: 1px solid #ccc;
//     background: #eee;
//     padding: 0.5rem 1rem;
//     button {
//       border: 0;
//       background: #78f89f;
//       border-radius: 5px;
//       padding: 0.5rem 1rem;
//       font-size: 0.8rem;
//       line-height: 1;
//     }
//   }
// }

// #centered-toggle-button {
//   position: absolute;
// }
