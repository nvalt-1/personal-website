import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const DefaultPaper = (props) => {
  return (
    <Paper
      elevation={props.elevation ? props.elevation : 0}
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 2,
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderColor: 'text.primary',
        width: props.width ? props.width : 'auto'
      }}
    >
      { props.children }
    </Paper>
  )
}

export default function Home() {
  const theme = useTheme();
  return (
    <DefaultPaper width='100%'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DefaultPaper>
            {'test'}
          </DefaultPaper>
        </Grid>
        <Grid item xs={12} md={8}>
          <DefaultPaper elevation={6}>
            <Typography variant='h5' gutterBottom>
              About Me
            </Typography>
            <Typography variant='body'>
              body
            </Typography>
          </DefaultPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultPaper elevation={6}>
            <Typography variant='h5' gutterBottom>
              Projects
            </Typography>
            <Typography variant='body'>
              body
            </Typography>
          </DefaultPaper>
        </Grid>
      </Grid>
    </DefaultPaper>
  );
}
