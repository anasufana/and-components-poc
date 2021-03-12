import React from 'react';
import { config, withDesign } from 'storybook-addon-designs';
import B from '../button';

const Template = ({ children }) => <B>{children}</B>;
export const Button = Template.bind({});

export default {
  component: Button,
  title: 'Design System/Components/Button',
  decorators: [withDesign],
};

Button.args = {
  children: 'Click me',
};

Button.parameters = {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/05z0W1IFiVOnyDYiNqTbAG/AND-Design-System-%E2%80%94-WIP?node-id=1327%3A2515',
    allowFullscreen: true,
  }),
};
