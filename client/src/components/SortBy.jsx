import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SortBy({ sort }) {
  return (
    <Dropdown>
      <p>Sort By {sort} ▼</p>
      <Content>
        <Ref>Most Relevant</Ref>
        <Ref>Most Helpful</Ref>
        <Ref>Highest to Lowest Rating</Ref>
        <Ref>Lowest to Highest Rating</Ref>
        <Ref>Most Recent</Ref>
      </Content>
    </Dropdown>
  );
}

SortBy.propTypes = {
  sort: PropTypes.string.isRequired,
};
const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 225px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  &:hover ${Content} {
    display: inline-block;
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
