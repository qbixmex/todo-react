import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { boxStyles } from './task.styles';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';

export const Task: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      <TaskHeader />
      <TaskDescription />
      {/*// TODO: Task Footer */}
    </Box>
  );
};