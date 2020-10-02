import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SortBy({ sort, setSort }) {
  const sortRelevant = () => setSort('Most Relevant');
  const sortHelpful = () => setSort('Most Helpful');
  const sortHighRate = () => setSort('Highest to Lowest Rating');
  const sortLowRate = () => setSort('Lowest to Highest Rating');
  const sortRecent = () => setSort('Most Recent');

  return (
    <Dropdown data-testid="dropDown">
      Sort By:
      {' '}
      {sort}
      {' '}
      ▼
      <Content data-testid="content">
        <Ref data-testid="relevant" onClick={sortRelevant}>Most Relevant</Ref>
        <Ref data-testid="helpful" onClick={sortHelpful}>Most Helpful</Ref>
        <Ref data-testid="high" onClick={sortHighRate}>Highest to Lowest Rating</Ref>
        <Ref data-testid="low" onClick={sortLowRate}>Lowest to Highest Rating</Ref>
        <Ref data-testid="recent" onClick={sortRecent}>Most Recent</Ref>
      </Content>
    </Dropdown>
  );
}

SortBy.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};
const Content = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  width: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
  z-index: 1;
  &:hover ${Content} {
    display: block;
  }
`;

const Ref = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #2b455c;
    color: #fff;
  }
`;

export default SortBy;
