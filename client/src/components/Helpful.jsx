import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Helpful({
  helpfulyes, helpfulno, idd, patchData,
}) {
  const [yes, setYes] = useState(helpfulyes);
  const [no, setNo] = useState(helpfulno);
  // const [selected, setSelected] = useState(null);
  const [id] = useState(idd);

  const increaseYes = () => {
    patchData('yes', id);
    setYes(yes + 1);
  };
  const increaseNo = () => {
    patchData('no', id);
    setNo(no + 1);
  };

  return (
    <div>
      Helpful?
      <HelpfulButton data-testid="yesButton" value={yes} onClick={increaseYes}>
        Yes ·
        {' '}
        {yes}
      </HelpfulButton>
      <HelpfulButton data-testid="noButton" value={no} onClick={increaseNo}>
        No ·
        {' '}
        {no}
      </HelpfulButton>
      <HelpfulButton>Report as inappropriate</HelpfulButton>
    </div>
  );
}

Helpful.propTypes = {
  helpfulyes: PropTypes.number.isRequired,
  helpfulno: PropTypes.number.isRequired,
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
