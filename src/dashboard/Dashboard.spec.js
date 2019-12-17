// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard matches snapshot', () => {
  const locked = true;
  const closed = true;
  const tree = render(<Dashboard locked={locked} closed={closed} />);
  expect(tree).toMatchSnapshot();
})
