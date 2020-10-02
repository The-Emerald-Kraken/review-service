import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ReviewService from '../client/src/components/ReviewService';
import Review from '../client/src/components/Review';
import Helpful from '../client/src/components/Helpful';
import Fit from '../client/src/components/Fit';
import LoadMore from '../client/src/components/LoadMore';
import Star from '../client/src/components/Star';
import SortBy from '../client/src/components/SortBy';
import sampleReview from '../sampleData.js'

describe('A suite example using Snapshot',  () => {
  it('renders Reviews Services correctly', () => {
    const tree = renderer
      .create(<ReviewService start={1}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Fit Display Component', () => {
    const tree = renderer
      .create(<Fit rating={sampleReview.fit} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Helpful Button Component', () => {
    const tree = renderer
      .create(<Helpful
        helpful_yes={sampleReview.helpful_yes}
        helpful_no={sampleReview.helpful_no}
        idd={sampleReview._id}
        patchData={()=>(null)}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Load More Button Component', () => {
    const tree = renderer
      .create(<LoadMore
        changeDisplay={()=>(null)}
        currentDisplay={1}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Review Display Component', () => {
    const tree = renderer
      .create(<Review
        review={sampleReview}
        patchData={()=>(null)}
        showImgModal={()=>(null)}
        setModalImg={()=>(null)}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Star Review Component', () => {
    const tree = renderer
      .create(<Star rating={sampleReview.rating} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly SortBy Review Component', () => {
    const tree = renderer
      .create(<SortBy sort={'Highest to Lowest Rating'} setSort={()=>(null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// to my understanding, shallow make it so I do not have to 'mount' it to a real page
describe('A test suite example using enzyme', function() {
  xit('should render ReviewService without throwing an error', function() {
    expect(shallow(<ReviewService start={1} />).contains('Reviews')).toBe(true);
  });

});