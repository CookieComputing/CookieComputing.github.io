import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={defaultTheme}>
       <h1>Hello, world! </h1>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
