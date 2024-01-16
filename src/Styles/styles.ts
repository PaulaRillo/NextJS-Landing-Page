import { alpha } from "@mui/material";
import { StylesProps } from "../Theme/StylesProps";
import theme from "../Theme/theme";

export const main: StylesProps = {
  background:
    "linear-gradient(180deg, #11253e 0%, #224b7d 32%, #18304d 77%, #22446d 100%)",
};

export const menu: StylesProps = {
  color: theme.palette.common.white,
  [theme.breakpoints.up("md")]: { display: "none" },
};

export const banner: StylesProps = {
  pt: "74px",
  pb: 14,
  [theme.breakpoints.down("md")]: {
    pt: 6,
    pb: 10,
  },
};

export const bannerBg: StylesProps = {
  backgroundImage: "url(images/banner-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px 0px",
  backgroundSize: "830px",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "20px 17px",
    backgroundSize: "690px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundImage: "none",
  },
};

export const title: StylesProps = {
  color: theme.palette.common.white,
  textAlign: "center",
  [theme.breakpoints.down("lg")]: { fontSize: 48 },
  [theme.breakpoints.down("md")]: { fontSize: 32 },
};

export const subtitle: StylesProps = {
  color: theme.palette.common.white,
  textAlign: "center",
  pt: 6,
  [theme.breakpoints.down("lg")]: { fontSize: 18 },
  [theme.breakpoints.down("md")]: { fontSize: 16, pt: 4 },
};

export const flow: StylesProps = {
  position: "relative",
  [theme.breakpoints.down("md")]: { my: 4 },
};
export const arrowDown: StylesProps = {
  position: "absolute",
  top: "3px",
  right: "-47px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
};

export const arrowUp: StylesProps = {
  position: "absolute",
  top: "85px",
  right: "-47px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
};

export const featureContent: StylesProps = {
  px: 10,
  my: "auto",
  [theme.breakpoints.down("md")]: { px: 4, my: 4 },
};

export const featureText: StylesProps = {
  color: theme.palette.common.white,
};

export const featureDetail: StylesProps = {
  color: theme.palette.common.white,
  [theme.breakpoints.down("lg")]: { fontSize: 12 },
};

export const featureBox: StylesProps = {
  background:
    "linear-gradient(180deg, rgba(47, 92, 146, 0.70) 50%, rgba(24, 48, 77, 0.00) 100%)",
  boxShadow: theme.shadows[3],
  p: 4,
  borderRadius: 4,
  [theme.breakpoints.down("lg")]: {
    p: 2,
  },
};

export const featureWrapper: StylesProps = {
  bgcolor: alpha(theme.palette.primary.dark, 0.5),
  px: 2,
  py: 4,
  borderRadius: 2,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
};

export const saleText: StylesProps = {
  color: theme.palette.common.white,
};

export const feature01Bg: StylesProps = {
  backgroundImage: "url(images/feat01-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "160px 62px",
  backgroundSize: "480px",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "134px 90px",
    backgroundSize: "276px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
    },
  },
};

export const feature02Bg: StylesProps = {
  backgroundImage: "url(images/feat02-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "608px -1px",
  backgroundSize: "480px",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "378px -1px",
    backgroundSize: "380px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
    },
  },
};

export const feature03Bg: StylesProps = {
  backgroundImage: "url(images/feat03-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "160px -1px",
  backgroundSize: "480px",
  [theme.breakpoints.down("lg")]: {
    backgroundPosition: "33px -1px",
    backgroundSize: "377px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
    },
  },
};

export const feature04Bg: StylesProps = {
  backgroundImage: "url(images/feat02-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "608px -1px",
  backgroundSize: "600px",
  [theme.breakpoints.down("md")]: {
    backgroundImage: "none",
  },
};

export const salesBg: StylesProps = {
  backgroundImage: "url(images/sales-connect-line.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "160px -1px",
  backgroundSize: "438px",
  mb: 10,
  [theme.breakpoints.down("md")]: {
    backgroundImage: "none",
  },
};

export const salesWrapper: StylesProps = {
  bgcolor: alpha(theme.palette.secondary.main, 0.5),
  p: 4,
  borderRadius: 50,
};

export const footer: StylesProps = {
  bgcolor: alpha(theme.palette.common.black, 0.1),
  boxShadow: theme.shadows[1],
};

export const footerContainer: StylesProps = {
  py: 4,
  borderTop: "1px solid",
  borderColor: theme.palette.primary.main,
};

export const footerItem: StylesProps = {
  display: "grid",
  px: 2,
  [theme.breakpoints.down("md")]: {
    p: 2,
  },
};

export const footerText: StylesProps = {
  color: theme.palette.common.white,
};
