import React from 'react';
import { render } from '../test-utils';
import Typography from './typography';

describe('Typography component', () => {
  it('should display text', () => {
    const text = 'Hello World!';
    const { getByText } = render(<Typography>{text}</Typography>);

    expect(getByText(text)).toBeDefined();
  });
});
