import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SortBy({ sort, setSort }) {
  return (
    <Dropdown>
      Sort By:
      {' '}
      {sort}
      {' '}
      ▼
      <Content>
        <Ref onClick={() => setSort('Most Relevant')}>Most Relevant</Ref>
        <Ref onClick={() => setSort('Most Helpful')}>Most Helpful</Ref>
        <Ref onClick={() => setSort('Highest to Lowest Rating')}>Highest to Lowest Rating</Ref>
        <Ref onClick={() => setSort('Lowest to Highest Rating')}>Lowest to Highest Rating</Ref>
        <Ref onClick={() => setSort('Most Recent')}>Most Recent</Ref>
      </Content>
    </Dropdown>
  );
}

SortBy.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};
const Content = styled.div`
  display: none;
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
