import { createTheme } from '@mui/material/styles';
import { palette } from "./palette";
import { typography } from './typography';
import { shadows } from './shadows';

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    mobile: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 390,
      tablet: 480,
      md: 700,
      lg: 1024,
      xl: 1280,
    },
  },
  palette,
  typography,
  shadows,
});

export default theme;
