import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ImgModal({ image, showImgModal, onClose }) {
  if (!showImgModal) {
    return null;
  }
  return (
    <Modal>
      <Title>Modal Window</Title>
      <Content>
        <Image inputSrc={image.url} />
        {image.description}
      </Content>
      <Action>
        <Button onClick={() => onClose(false)}>
          close
        </Button>
      </Action>
    </Modal>
  );
}

ImgModal.propTypes = {
  image: PropTypes.shape().isRequired,
  onClose: PropTypes.func.isRequired,
  showImgModal: PropTypes.bool.isRequired,
};
const Modal = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  &.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(black, 0.2);
  }
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
    &.off {
      offset-distance: 100%;
    }
  }
  @media (prefers-reduced-motion) {
    offset-path: none;
  }`;

const Title = styled.h2`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  margin: 0;`;

const Content = styled.div`
  padding: 1rem;
`;
const Image = styled.img`
width: 150px;
height: 150px;
background-size: auto;
background-repeat: no-repeat;
background-image: url(${(props) => props.inputSrc});
position: relative;
margin-right: 1.5px;
margin -left: 1.5px;
`
const Action = styled.div`
  border-top: 1px solid #ccc;
  background: #eee;
  padding: 0.5rem 1rem;
`;

const Button = styled.button`
  border: 0;
  background: #78f89f;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1;
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
