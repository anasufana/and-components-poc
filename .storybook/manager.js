import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from './static/and-logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AND Component Library',
    brandImage: logo,
  }),
});
