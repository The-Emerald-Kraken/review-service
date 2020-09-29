import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

function Helpful({ helpful, idd, patchData }) {
  const [yes, setYes] = useState(helpful.yes);
  const [no, setNo] = useState(helpful.no);
  const [selected, setSelected] = useState(null);
  const [id] = useState(idd);

  useEffect(() => {
    if (selected !== null) {
      patchData(selected, id);
    }
  }, [selected]);

  return (
    <span>
      Helpful?
      <HelpfulButton onClick={() => {
        setYes(yes + 1);
        setSelected('yes');
      }}
      >
        Yes {yes}
      </HelpfulButton>
      <HelpfulButton onClick={() => {
        setNo(no + 1);
        setSelected('no');
      }}
      >
        No {no}
      </HelpfulButton>
      <HelpfulButton>Report as inappropriate</HelpfulButton>
    </span>
  );
}

Helpful.propTypes = {
  helpful: PropTypes.shape().isRequired,
  idd: PropTypes.string.isRequired,
  patchData: PropTypes.func.isRequired,
};

const HelpfulButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 2px;
  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
`;

export default Helpful;