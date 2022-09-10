import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Home from './containers/Home';
// import Projects from './containers/Projects';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#04B4FF',
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

theme = responsiveFontSizes(theme);

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
            {/* <Route exact path='/projects' element={<Projects />} /> */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
