import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App';


describe('A suite example using jest only',  () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

// to my understanding, shallow make it so I do not have to 'mount' it to a real page
describe('A test suite example using enzyme', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains('React is Working my Friends')).toBe(true);
  });
  // allows for me to know if a class is avalible to be selected
  xit('should be selectable by class "foo"', function() {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('React is Working my Friends');
  });
});