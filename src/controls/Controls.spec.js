// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls matches snapshot', () => {
  const locked = 'Unlock Gate';
  const closed = 'Open Gate';
  const tree = render(<Controls locked={locked} closed={closed} />);
  expect(tree).toMatchSnapshot();
})
