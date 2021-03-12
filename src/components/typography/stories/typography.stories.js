import React from 'react';
import { config, withDesign } from 'storybook-addon-designs';
import T from '../typography';

const Template = ({ children, ...args }) => <T {...args}>{children}</T>;
export const Typography = Template.bind({});

export default {
  component: Typography,
  title: 'Design System/Components/Typography',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'body',
          'bodySmall',
          'bodyLarge',
          'button',
        ],
      },
    },
  },
  decorators: [withDesign],
};

Typography.args = {
  children: 'We build better products AND stronger teams',
  variant: 'body',
};

Typography.parameters = {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/05z0W1IFiVOnyDYiNqTbAG/AND-Design-System-%E2%80%94-WIP?node-id=1297%3A867',
    allowFullscreen: true,
  }),
};
