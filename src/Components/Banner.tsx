"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProjectorScreenChart } from "@phosphor-icons/react";
//styling
import theme from "../Theme/theme";
import * as styles from "../Styles/styles";

export const Banner = () => {
  return (
    <>
      <Container maxWidth="xl" sx={styles.bannerBg}>
        <Box sx={styles.banner}>
          <Typography variant="h1" sx={styles.title}>
            Embrace the future of <br />
            <span
              style={{
                backgroundColor: theme.palette.primary.main,
                padding: 2,
              }}
            >
              Accounting
            </span>
          </Typography>
          <Typography variant="h5" sx={styles.subtitle}>
            Postolo is an AI-powered Bookkeeping Automation tool
            <br />
            for Seamless and Accurate Accounting with ERP Integration & Open
            Banking
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ color: theme.palette.common.white, textAlign: "center" }}
        >
          <Grid item mobile={12} md={4} lg={2} sx={styles.flow}>
            <Box
              component="img"
              src="images/arrow-down.svg"
              alt="Arrow down"
              loading="lazy"
              sx={styles.arrowDown}
            />
            <Box
              component="img"
              src="images/postolo-flow.svg"
              alt="Postolo automation and AI"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                What will Postolo <br />
                automation and AI <br /> do for you?
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile={12} md={4} lg={2} sx={styles.flow}>
            <Box
              component="img"
              src="images/arrow-up.svg"
              alt="Arrow down"
              loading="lazy"
              sx={styles.arrowUp}
            />
            <Box
              component="img"
              src="images/postolo-flow2.svg"
              alt="Retrieve transactions"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                Retrieve transactions and <br />
                relevant documents <br />
                from financial institutions
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile={12} md={4} lg={2} sx={styles.flow}>
            <Box
              component="img"
              src="images/arrow-down.svg"
              alt="Arrow down"
              loading="lazy"
              sx={{
                ...styles.arrowDown,
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              }}
            />
            <Box
              component="img"
              src="images/postolo-flow3.svg"
              alt="AI to categorize transaction"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                Use AI to categorize transactions <br />
                and associate them with the proper <br />
                general ledger accounts
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile={12} md={4} lg={2} sx={styles.flow}>
            <Box
              component="img"
              src="images/arrow-up.svg"
              alt="Arrow down"
              loading="lazy"
              sx={styles.arrowUp}
            />
            <Box
              component="img"
              src="images/postolo-flow4.svg"
              alt="H&CO experts verification"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                Verification process performed <br />
                by H&CO experts to ensure correct <br />
                and complete accounting
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile={12} md={4} lg={2} sx={styles.flow}>
            <Box
              component="img"
              src="images/arrow-down.svg"
              alt="Arrow down"
              loading="lazy"
              sx={styles.arrowDown}
            />
            <Box
              component="img"
              src="images/postolo-flow5.svg"
              alt="Automate the reconciliation process"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                Automatically synchronize <br />
                with your ERP to automate <br />
                the reconciliation process
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile={12} md={4} lg={2}>
            <Box
              component="img"
              src="images/postolo-flow6.svg"
              alt="Generate financial reports"
              loading="lazy"
            />
            <Box>
              <Typography variant="caption">
                Generate financial reports and view <br />
                metrics to assess company <br />
                performance and financial standing
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Grid
          container
          sx={{ color: theme.palette.common.white, textAlign: "center" }}
        >
          <Grid item mobile={12} md={12}>
            <Box
              component="img"
              src="images/postolo-argument-hco.svg"
              alt="H&CO - Created By Experts"
              loading="lazy"
            />
          </Grid>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              md={3}
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="images/postolo-argument-ai.svg"
                alt="Enhanced by Artificial Intelligence"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(47, 92, 146, 0.80) 50%, rgba(24, 48, 77, 0.00) 100%)",
                  p: 4,
                  borderRadius: 4,
                  mx: 2,
                }}
              >
                <Box
                  component="img"
                  src="images/dashboard.jpg"
                  alt="Postolo the future of simplified accounting"
                  loading="lazy"
                  width="100%"
                />
                <Button
                  variant="contained"
                  endIcon={<ProjectorScreenChart weight="duotone" />}
                  sx={{ mt: "-50%" }}
                >
                  REQUEST A DEMO
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              md={3}
              sx={{
                ml: -3,
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="images/postolo-argument-mastercard.svg"
                alt="MasterCard - Precise with Open Banking"
                width="100%"
                loading="lazy"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              mobile={12}
              sx={{
                [theme.breakpoints.up("md")]: {
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="images/postolo-arguments.svg"
                alt="MasterCard - Precise with Open Banking"
                loading="lazy"
                width="60%"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              md={4}
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="images/postolo-argument-sap.svg"
                alt="MasterCard - Precise with Open Banking"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="images/postolo-argument-aws.svg"
                alt="MasterCard - Precise with Open Banking"
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
