import { FC, ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { taskCountersStyles, tasksStyles } from './taskArea.styles';
import { TaskCounter, Task } from '../../components';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import { useQuery } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest('https://localhost:4000/tasks', 'GET');
    }
  );

  return (
    <Grid item xs={12} md={8} px={4}>
      <Box mb={8} px={4}>
        <Typography my={2}>
          Status of your tasks as on{' '}
          { format(new Date(), 'PPPP') }
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={12} md={10} sx={taskCountersStyles}>
          <TaskCounter count={10} status={Status.todo} />
          <TaskCounter count={2} status={Status.inProgress} />
          <TaskCounter count={4} status={Status.completed} />
        </Grid>
        <Grid item xs={10} md={8} sx={tasksStyles}>
          <Task title='GO to the store' priority={ Priority.high } />
          <Task title='GO to the job' priority={ Priority.low } />
          <Task title='GO to the job' priority={ Priority.normal } />
        </Grid>
      </Grid>
    </Grid>
  );
};
