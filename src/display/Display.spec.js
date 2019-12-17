// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display matches snapshot', () => {
  // Arrange, Act, Assert
  const closedClass = true;
  const lockedClass = false;
  const tree = render(<Display closedClass={closedClass} lockedClass={lockedClass}/>);
  expect(tree).toMatchSnapshot();
})
