import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LaunchIcon from '@mui/icons-material/Launch';

// TODO: refactor this
const DefaultPaper = (props) => {
  return (
    <Paper
      elevation={props.elevation ? props.elevation : 0}
      sx={{
        flexDirection: props.flexDirection ? props.flexDirection : 'column',
        display: 'flex',
        alignItems: props.alignItems ? props.alignItems : 'left',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 2,
        m: 2,
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
  return (
    <DefaultPaper width='100%'>
      <Grid container spacing={2}>
        <Grid item className='header' xs={12}>
          <Stack direction='row-reverse' spacing={1}>
            <Tooltip title='Resume'>
              <IconButton aria-label='resume-cv' href='./Nathaniel_Valtierra_resume.pdf' target='_blank'>
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Github'>
              <IconButton aria-label='github' href='https://github.com/nvalt-1'>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Contact me'>
              <IconButton aria-label='email' href='mailto:info@nvaltierra.com'>
                <EmailIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item className='about' xs={12} md={8} lg={5}>
          <DefaultPaper elevation={6}>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              About Me
            </Typography>
            <Typography variant='body1' gutterBottom>
              My name is Nathaniel Valtierra. I am a computer science undergraduate
              at the University of Houston.
            </Typography>
            <Typography variant='body1' gutterBottom>
              I've developed code for various applications, from microcontrollers,
              embedded systems, and robotics to database systems, full-stack web development,
              and data science/machine learning.
            </Typography>
            <Typography variant='body1' gutterBottom>
              I am proficient in <b>Python</b> (NumPy, Pandas, Scikit-learn, Tensorflow), <b>C/C++</b> (C99, C11, C++11-20),
              and <b>Javascript</b> (Node, React,
              Express), and have experience with <b>SQL</b>, <b>Java</b>, <b>C#</b> (Unity engine), and <b>R</b>.
            </Typography>
          </DefaultPaper>
        </Grid>
        <Grid item className='contact' xs={12} md={4} lg={3}>
        <DefaultPaper elevation={6}>
          <Typography variant='h5' color='text.secondary' gutterBottom>
            Contact
          </Typography>
          <Typography variant='body1' gutterBottom>
            Name: Nathaniel Valtierra
          </Typography>
          <Typography variant='body1' gutterBottom>
            Inquiries:&nbsp;
            <Link href='mailto:info@nvaltierra.com'>info@nvaltierra.com</Link>
          </Typography>
          <Typography variant='body1' gutterBottom>
            Location: Houston, TX
          </Typography>
        </DefaultPaper>
        </Grid>
        {/*
        <Grid item className='projects' xs={12} md={8} lg={4}>
          <DefaultPaper elevation={6}>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Projects
            </Typography>
            <Typography gutterBottom>
              <Link href='#'>test1</Link>
            </Typography>
            <Typography gutterBottom>
              <Link href='#'>test2</Link>
            </Typography>
            <Typography gutterBottom>
              <Link href='#'>test3</Link>
            </Typography>
            <Typography gutterBottom>
              <Link href='#'>test4</Link>
            </Typography>
            <Button endIcon={<LaunchIcon />} href='/projects' size='small'>
              more
            </Button>
          </DefaultPaper>
        </Grid>
        */}
      </Grid>
    </DefaultPaper>
  );
}
