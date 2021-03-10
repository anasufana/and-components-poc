import React from 'react';
import { Box } from '@material-ui/core';
import { config, withDesign } from 'storybook-addon-designs';
import Typography from '../../typography';
import theme from '../theme';

const Template = () => {
  const { palette } = theme;
  const colourCategories = Object.keys(palette)
    .filter(item => typeof palette[item] === 'object' && item !== 'action')
    .reduce((items, item) => ({ ...items, [item]: palette[item] }), {});

  return (
    <Box px={6} py={4} bgcolor={theme.palette.background.default}>
      <Typography variant="h1">Colour</Typography>
      <Box mt={2}>
        <Typography variant="bodyLarge">
          These are all the colours generated in the current colour palette. It
          is here as more of a guide to aid further development on the palette.
          The guide on how to use these colours is in the Figma design addon
          tab.
        </Typography>
      </Box>
      {Object.entries(colourCategories).map(([key, value]) => (
        <Box pt={4} key={`${key}-${value}`}>
          <Typography variant="h4">{key}</Typography>
          <Box display="flex" flexWrap="wrap">
            {Object.entries(value).map(([property, colour]) => (
              <Box pr={4} pt={2} whiteSpace="break-spaces" width={130}>
                <Typography>{property}</Typography>
                <Box
                  width="100%"
                  height={100}
                  bgcolor={colour}
                  border={`1px solid ${palette.secondary.border}`}
                  mt={1}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export const Colour = Template.bind({});

export default {
  component: Colour,
  title: 'Design System/Theme',
  decorators: [withDesign],
};

Colour.parameters = {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/05z0W1IFiVOnyDYiNqTbAG/AND-Design-System-%E2%80%94-WIP?node-id=1297%3A934',
    allowFullscreen: true,
  }),
};
