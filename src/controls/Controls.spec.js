// Test away!

import React from 'react';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';

import Controls from './Controls';

// test('App renders correctly', () => {
//   render(<Controls />);
// });

// describe('<Controls />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<Controls />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

test('Controls matches snapshot', () => {
  const locked = 'Unlock Gate';
  const closed = 'Open Gate';
  const tree = render(<Controls locked={locked} closed={closed} />);
  expect(tree).toMatchSnapshot();
})
