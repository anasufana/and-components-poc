import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { config, withDesign } from 'storybook-addon-designs';
import T, { variantMappings } from '../../typography/typography';

const Template = () => (
  <Box px={6} py={4}>
    <T variant="h1">Typography</T>
    <Box borderTop="1px solid grey" pt={3} mt={2}>
      {Object.keys(variantMappings).map(variant => (
        <Grid container alignItems="center" spacing={10} key={variant}>
          <Grid item xs={3} sm={2}>
            <T variant={variant}>{variant}</T>
          </Grid>
          <Grid item xs={9} sm={10}>
            <T variant={variant}>
              We build better products AND stronger teams.
            </T>
          </Grid>
        </Grid>
      ))}
    </Box>
  </Box>
);
export const TypographyOverview = Template.bind({});

export default {
  component: TypographyOverview,
  title: 'Design System/Theme',
  decorators: [withDesign],
};

TypographyOverview.parameters = {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/05z0W1IFiVOnyDYiNqTbAG/AND-Design-System-%E2%80%94-WIP?node-id=1297%3A867',
    allowFullscreen: true,
  }),
};
