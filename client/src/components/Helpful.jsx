/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Helpful({ helpful_yes, helpful_no, idd, patchData }) {
  const [yes, setYes] = useState(helpful_yes);
  const [no, setNo] = useState(helpful_no);
  // const [selected, setSelected] = useState(null);
  const [id] = useState(idd);

  return (
    <span>
      Helpful?
      <HelpfulButton onClick={() => {
        patchData('yes', id);
        setYes(yes + 1);
      }}
      >
        Yes · {yes}
      </HelpfulButton>
      <HelpfulButton onClick={() => {
        patchData('no', id);
        setNo(no + 1);
      }}
      >
        No · {no}
      </HelpfulButton>
      <HelpfulButton>Report as inappropriate</HelpfulButton>
    </span>
  );
}

Helpful.propTypes = {
  helpful_yes: PropTypes.number.isRequired,
  helpful_no: PropTypes.number.isRequired,
  idd: PropTypes.string.isRequired,
  patchData: PropTypes.func.isRequired,
};

const HelpfulButton = styled.button`
  color: #292929;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
  margin-right: -5px;
  margin-left: 10px;
  font-weight: 400;

  text-decoration: none;

  cursor: pointer;
  background-color: white;
  border: 1px solid grey;
  border-radius: 2px;
  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
`;

export default Helpful;
