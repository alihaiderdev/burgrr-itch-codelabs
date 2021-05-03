import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';

const withMuiTheme = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#F46B0D',
      },
      secondary: {
        main: '#1B1B1B',
      },
      //   info: {
      //     main: '#F46B0D',
      //   },
      //   error: {},
      //   warning: {},
      //   success: {
      //     light: '#64b5f6',
      //     main: '#2196f3',
      //     dark: '#1976d2',
      //     contrastText: '#fff',
      //   },
      text: {
        primary: '#F46B0D',
        secondary: '#1B1B1B',
      },

      //   default: {
      //     marin: '#f1f3f4',
      //   },
      //   tertiary: {
      //     main: '#f0f0f0',
      //     placeholder: '#3f3f3f',
      //     text: '#434343',
      //     heading: '#040404',
      //   },
    },

    typography: {
      //   fontFamily: ['PoppinsRegular', 'PoppinsMedium'].join(','),
      fontFamily: 'UbuntuMedium',
    },
  });

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{/* <App /> */}</ThemeProvider>;
};

export default withMuiTheme;
