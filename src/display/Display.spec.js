// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Display from './Display';

test('App renders correctly', () => {
  render(<Display />);
});

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
