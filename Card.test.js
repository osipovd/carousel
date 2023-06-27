import { render } from '@testing-library/react';
import Card from './Card';
import Carousel from './Carousel';
import TEST_IMAGES from './_testCommon';

// Card Component Tests
describe('Card component', () => {
  test('renders without errors', () => {
    render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={2} />);
    // No error occurred if the component renders successfully
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={2} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Carousel Component Tests
describe('Carousel component', () => {
  test('renders without errors', () => {
    render(<Carousel photos={TEST_IMAGES} title="Images for Testing" />);
    // No error occurred if the component renders successfully
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="Images for Testing" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
