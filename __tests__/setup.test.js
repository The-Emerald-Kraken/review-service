import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow, mount, render } from 'enzyme';
import { render, fireEvent, getByTestId, waitFor } from '@testing-library/react'
import renderer from 'react-test-renderer';
import ReviewService from '../client/src/components/ReviewService';
import ReviewStatsContainer from '../client/src/components/ReviewStatsContainer';
import ImgModal from '../client/src/components/ImgModal';
import Review from '../client/src/components/Review';
import Helpful from '../client/src/components/Helpful';
import Fit from '../client/src/components/Fit';
import LoadMore from '../client/src/components/LoadMore';
import Star from '../client/src/components/Star';
import SortBy from '../client/src/components/SortBy';
import ReviewModal from '../client/src/components/ReviewModal';
import sampleReview from '../sampleData.js'
const noop = () => { };
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

describe('A suite of tests for Reviews Services Container', () => {
  it('renders Reviews Services correctly', () => {
    const tree = renderer
      .create(<ReviewService start={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('A suite of tests for ReviewModal Component', () => {
  it('renders Reviews Services correctly', () => {
    const tree = renderer
      .create(<ReviewModal img={sampleReview.images[0]} showReviewModal={true} onClose={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it does nopt renders Reviews Services', () => {
    const tree = renderer
      .create(<ReviewModal img={sampleReview.images[0]} showReviewModal={false} onClose={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('A suite of tests for Review Display Component', () => {
  it('renders correctly Review Display Component', () => {
    const tree = renderer
      .create(<Review
        review={sampleReview}
        patchData={() => (null)}
        showImgModal={() => (null)}
        setModalImg={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('A suite of tests for Review Stats Container Component', () => {
  it('renders correctly Review Display Component', () => {
    const avg = {
      rating: 4.8,
      fit: .667,
      1: 1,
      2: 3,
      3: 2,
      4: 5,
      5: 4,
      count: 15,
    };
    const tree = renderer
      .create(<ReviewStatsContainer
        avgReview={avg}
        setSort={() => (null)}
        sort={'Most Recent'}
        display={5}
        openReview={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('A suite of tests for ImgModal Component', () => {
  it('renders correctly ImgModal Component', () => {
    const tree = renderer
      .create(<ImgModal
        image={sampleReview.images[0]}
        showImgModal={true}
        onClose={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('does not renders ImgModal Component', () => {
    const tree = renderer
      .create(<ImgModal
        image={sampleReview.images[0]}
        showImgModal={false}
        onClose={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('A suite of tests for Load More Component', () => {
  it('renders correctly Load More Button Component', () => {
    const tree = renderer
      .create(<LoadMore
        changeDisplay={() => (null)}
        currentDisplay={1}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('A suite of tests for Star Review Component', () => {
  it('renders correctly Star Review Component with 1 ★\'s', () => {
    const tree = renderer
      .create(<Star rating={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly Star Review Component with 3 ★\'s', () => {
    const tree = renderer
      .create(<Star rating={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly Star Review Component with 5 ★\'s', () => {
    const tree = renderer
      .create(<Star rating={5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly Star Review Component with 4.5 ★\'s', () => {
    const tree = renderer
      .create(<Star rating={4.5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly Star Review Component with no ★\'s', () => {
    const tree = renderer
      .create(<Star rating={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('A suite of tests for SortBy Component', () => {
  it('renders correctly SortBy Review Component by "Highest to Lowest Rating"', () => {
    const tree = renderer
      .create(<SortBy sort={'Highest to Lowest Rating'} setSort={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly SortBy Review Component by "Highest to Lowest Rating"', () => {
    const tree = renderer
      .create(<SortBy sort={'Lowesest to Highest Rating'} setSort={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly SortBy Review Component by "Most Helpful"', () => {
    const tree = renderer
      .create(<SortBy sort={'Most Helpful'} setSort={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly SortBy Review Component by "Most Recent"', () => {
    const tree = renderer
      .create(<SortBy sort={'Most Recent'} setSort={() => (null)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Dropdown displays proper text when dropdown item is selected", () => {
    let mySort = 'Most Recent';
    const mySetSort = (n) => mySort = n;
    const { container } = render(<SortBy sort={mySort} setSort={mySetSort} />);

    const dropDown = getByTestId(container, "dropDown");
    const content = getByTestId(container, 'content');
    const relevant = getByTestId(container, "relevant");
    const helpful = getByTestId(container, "helpful");
    const highest = getByTestId(container, "high");
    const lowest = getByTestId(container, "low");
    const recent = getByTestId(container, "recent");


    expect(mySort).toMatch('Most Recent');
    fireEvent.click(relevant);
    expect(mySort).toMatch('Most Relevant');
    fireEvent.click(helpful);
    expect(mySort).toMatch('Most Helpful');
    fireEvent.click(highest);
    expect(mySort).toMatch('Highest to Lowest Rating');
    fireEvent.click(lowest);
    expect(mySort).toMatch('Lowest to Highest Rating');
    fireEvent.click(recent);
    expect(mySort).toMatch('Most Recent');

  });

});

describe('A suite of tests for Helpful Component', () => {
  it('renders correctly Helpful Button Component', () => {
    const tree = renderer
      .create(<Helpful
        helpfulyes={sampleReview.helpful_yes}
        helpfulno={sampleReview.helpful_no}
        idd={sampleReview._id}
        patchData={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Increment Yes & No Helpful buttons correctly", () => {
    const { container } = render(<Helpful
      helpfulyes={sampleReview.helpful_yes}
      helpfulno={sampleReview.helpful_no}
      idd={sampleReview._id}
      patchData={() => (null)}
    />);

    const yesClick = getByTestId(container, "yesButton");
    const noClick = getByTestId(container, "noButton");
    expect(yesClick.value).toBe("1");
    expect(noClick.value).toBe("2");
    fireEvent.click(yesClick);
    expect(yesClick.value).toBe("2");
    fireEvent.click(noClick);
    expect(noClick.value).toBe("3");
  });

});


describe('A suite of tests for Fit Component', () => {
  it('renders correctly Fit Display Component as "Runs Small', () => {
    const tree = renderer
      .create(<Fit rating={'0'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly Fit Display Component as "Runs Large', () => {
    const tree2 = renderer
      .create(<Fit rating={'1'} />)
      .toJSON();
    expect(tree2).toMatchSnapshot();
  });

  it('renders correctly Fit Display Component as "True Fit', () => {
    const tree3 = renderer
      .create(<Fit rating={'0.5'} />)
      .toJSON();
    expect(tree3).toMatchSnapshot();
  });


});