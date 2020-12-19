import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function NotFound(): JSX.Element {
  return (
    <Grid container alignItems={'center'} justify={'center'}>
      <Grid item>
        <Typography variant="h3" align="center">
          404
        </Typography>
        <Typography variant="h6" align="center">
          Page not found.
        </Typography>
      </Grid>
    </Grid>
  );
}
