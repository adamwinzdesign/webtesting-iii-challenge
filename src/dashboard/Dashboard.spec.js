// Test away

import React from 'react';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

// test('App renders correctly', () => {
//   render(<Dashboard />);
// });

// describe('<Dashboard />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<Dashboard />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

test('Dashboard matches snapshot', () => {
  const locked = true;
  const closed = true;
  const tree = render(<Dashboard locked={locked} closed={closed} />);
  expect(tree).toMatchSnapshot();
})
