import { FC, ReactElement } from 'react';
import { sidebarStyles } from '../../pages/dashboard/dashboard.styles';
import { Grid } from '@mui/material';
import { Profile } from '../';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item sm={12} md={4} sx={sidebarStyles}>
      <Profile name='Miles Morales' />
    </Grid>
  );
};
