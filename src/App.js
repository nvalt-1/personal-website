import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Home from './containers/Home';
import Projects from './containers/Projects';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            bgcolor: 'background.default',
            color: 'text.primary'
          }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
