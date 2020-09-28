import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ReviewService from '../client/src/components/ReviewService';


describe('A suite example using jest only',  () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewService />, div);
  });
});

// to my understanding, shallow make it so I do not have to 'mount' it to a real page
describe('A test suite example using enzyme', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<ReviewService />).contains('Reviews')).toBe(true);
  });
  // allows for me to know if a class is avalible to be selected
  xit('should be selectable by class "foo"', function() {
    expect(shallow(<ReviewService />).is('.foo')).toBe(true);
  });

  xit('should mount in a full DOM', function() {
    expect(mount(<ReviewService />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<ReviewService />).text()).toEqual('Reviews');
  });
});