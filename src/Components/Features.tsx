"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProjectorScreenChart } from "@phosphor-icons/react";
//component
import { FeaturesMobile } from "./FeaturesMobile";
//styling
import theme from "../Theme/theme";
import * as styles from "../Styles/styles";

export const Features = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          pb: 4,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Grid container sx={styles.feature01Bg}>
          <Grid item md={6} sx={{ px: 2, textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                py: 2,
                mb: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.common.white }}
              >
                Escape the Tangles of Manual Accounting and Complex Systems
              </Typography>
            </Box>
            <Box
              component="img"
              src="images/banners-problems.png"
              alt="Tedious, tiresome and time-consuming manual work"
              loading="lazy"
              sx={{ width: "84%", float: "left" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{ px: 2, textAlign: "center", alignSelf: "end" }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: 1,
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.common.white }}
              >
                Embrace Seamless AI-Powered Automation with Postolo
              </Typography>
            </Box>
            <Box sx={styles.featureBox}>
              <Box sx={styles.featureWrapper}>
                <Box
                  component="img"
                  src="images/feature-01.svg"
                  alt="Invoices and documents being scanned by AI"
                  width="100%"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={styles.feature02Bg}>
          <Grid item md={6} sx={{ px: 2 }}>
            <Box sx={styles.featureBox}>
              <Box sx={styles.featureWrapper}>
                <Box
                  component="img"
                  src="images/feature-02.svg"
                  alt="H&CO - Created By Experts"
                  width="100%"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={styles.featureContent}>
            <Typography variant="h6" sx={styles.featureText}>
              Easily Connect your Bank Institutions
            </Typography>
            <Typography variant="body1" sx={styles.featureDetail}>
              Get the data from your Bank accounts feed automatically with very
              easy to connect flows of only a few clicks
            </Typography>
            <Button
              variant="contained"
              endIcon={<ProjectorScreenChart weight="duotone" />}
              sx={{ mt: 2 }}
            >
              REQUEST A DEMO
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={styles.feature03Bg}>
          <Grid item md={6} sx={styles.featureContent}>
            <Typography variant="h6" sx={styles.featureText}>
              Assign categories with AI-power
            </Typography>
            <Typography variant="body1" sx={styles.featureDetail}>
              Our AI will automatically assign your transactions to categories
              and associate them with the proper general ledger accounts
            </Typography>
            <Button
              variant="contained"
              endIcon={<ProjectorScreenChart weight="duotone" />}
              sx={{ mt: 2 }}
            >
              REQUEST A DEMO
            </Button>
          </Grid>
          <Grid item md={6} sx={{ px: 2 }}>
            <Box sx={styles.featureBox}>
              <Box sx={styles.featureWrapper}>
                <Box
                  component="img"
                  src="images/feature-03.svg"
                  alt="H&CO - Created By Experts"
                  width="100%"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={styles.feature04Bg}>
          <Grid item md={6} sx={{ px: 2 }}>
            <Box sx={styles.featureBox}>
              <Box sx={styles.featureWrapper}>
                <Box
                  component="img"
                  src="images/feature-04.svg"
                  alt="H&CO - Created By Experts"
                  width="100%"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={styles.featureContent}>
            <Typography variant="h6" sx={styles.featureText}>
              Generate Real-Time reports and taxes
            </Typography>
            <Typography variant="body1" sx={styles.featureDetail}>
              Generate financial reports and view metrics to assess company
              performance and financial standing
            </Typography>
            <Button
              variant="contained"
              endIcon={<ProjectorScreenChart weight="duotone" />}
              sx={{ mt: 2 }}
            >
              REQUEST A DEMO
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={styles.salesBg}>
          <Grid item md={6} sx={styles.featureContent}>
            <Box
              sx={{
                bgcolor: theme.palette.primary.main,
                px: 2,
                py: 1,
                my: 4,
                mr: "34px",
              }}
            >
              <Typography variant="h5" sx={styles.saleText}>
                Ready for Smarter Accounting?
              </Typography>
              <Typography variant="body1" sx={styles.saleText}>
                Contact Us Now and Unleash Postolo's Power
              </Typography>
            </Box>
            <Button variant="contained" color="error">
              Contact Sales
            </Button>
          </Grid>
          <Grid item md={6} sx={{ pt: 4, pb: 2, position: "relative" }}>
            <Box
              component="img"
              src="images/banner-postolo.png"
              alt="Tedious, tiresome and time-consuming manual work"
              loading="lazy"
              sx={{ width: "90%", float: "right", mt: 6 }}
            />
            <Box
              component="img"
              src="images/sales-postolo.svg"
              alt="Postolo is the solution for your accounting"
              loading="lazy"
              sx={{
                width: "228px",
                float: "left",
                position: "absolute",
                left: "-26px",
                bottom: "-40px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          pb: 4,
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
      >
        <FeaturesMobile />
      </Container>
    </>
  );
};
