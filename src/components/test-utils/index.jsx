/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../theme-provider';

const themeWrapper = (component, options) =>
  render(<ThemeProvider>{component}</ThemeProvider>, options);

export * from '@testing-library/react';

export { themeWrapper as render };
