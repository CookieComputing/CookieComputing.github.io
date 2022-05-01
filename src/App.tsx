import React, { Fragment } from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
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
       <Container maxWidth="sm">

       </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
