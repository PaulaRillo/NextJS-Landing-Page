import { PaletteOptions } from "@mui/material";
import { alpha } from "@mui/material/styles";

const COMMON = {
  black: "#000",
  white: "#fff",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  light: "#269DBC",
  main: "#1D7A92",
  dark: "#004B6B",
  contrastText: "#F2FBFF",
  contrastTextLight: "#FCFEFB",
};

const SECONDARY = {
  light: "#73DFE9",
  main: "#62CCD6",
  dark: "#39A6B8",
  contrastText: "#fff",
};

const BACKGROUND = {
  default: "#18304D",
};

const TEXT = {
  neutral: "#173354",
};

const SUCCESS = {
  light: "#7BC67E",
  main: "#4CAF50",
  dark: "#3B873E",
  contrastText: "#FFFFFF",
};

export const palette: PaletteOptions = {
  common: {
    black: COMMON.black,
    white: COMMON.white,
  },
  background: BACKGROUND,
  primary: PRIMARY,
  secondary: SECONDARY,
  text: {
    primary: alpha(TEXT.neutral, 0.87),
    secondary: alpha(TEXT.neutral, 0.6),
    disabled: alpha(TEXT.neutral, 0.38),
  },
  success: SUCCESS,
  divider: alpha(GREY[500], 0.24),
};

export default palette;
