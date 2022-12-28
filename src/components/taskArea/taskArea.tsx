import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item sm={12} md={8} px={4}>
      <h2>Task Area</h2>
    </Grid>
  );
};
