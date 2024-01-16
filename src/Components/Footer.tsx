"use client";

import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import {
  LinkedinLogo,
  YoutubeLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
//styling
import * as styles from "../Styles/styles";

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="xl" sx={styles.footerContainer}>
        <Grid container>
          <Grid item mobile={12} md={3} sx={styles.footerItem}>
            <Box
              component="img"
              alt="Postolo logo"
              src="/postolo.svg"
              loading="lazy"
              width="100%"
            />
            <Typography variant="caption" sx={styles.footerText}>
              AI-powered Bookkeeping Automation tool with ERP Integration & Open
              Banking
            </Typography>
          </Grid>
          <Grid item mobile={6} md={2} sx={styles.footerItem}>
            <Typography variant="overline" sx={styles.footerText}>
              the company
            </Typography>
            <Link href="#" variant="body2" sx={styles.footerText}>
              About US
            </Link>
            <Link href="#" variant="body2" sx={styles.footerText}>
              Our Team
            </Link>
          </Grid>
          <Grid item mobile={6} md={2} sx={styles.footerItem}>
            <Typography variant="overline" sx={styles.footerText}>
              contact us
            </Typography>
            <Link href="#" variant="body2" sx={styles.footerText}>
              Email: info@hco.com
            </Link>
            <Link href="#" variant="body2" sx={styles.footerText}>
              Tel: +1 3054448800
            </Link>
          </Grid>
          <Grid item mobile={6} md={3} sx={styles.footerItem}>
            <Typography variant="overline" sx={styles.footerText}>
              our social
            </Typography>
            <Stack direction="row">
              <Link href="#" variant="h5" sx={styles.footerText}>
                <LinkedinLogo weight="regular" />
              </Link>
              <Link href="#" variant="h5" sx={styles.footerText}>
                <YoutubeLogo weight="regular" />
              </Link>
              <Link href="#" variant="h5" sx={styles.footerText}>
                <InstagramLogo weight="regular" />
              </Link>
              <Link href="#" variant="h5" sx={styles.footerText}>
                <FacebookLogo weight="duotone" />
              </Link>
            </Stack>
          </Grid>
          <Grid item mobile={6} md={2} sx={styles.footerItem}>
            <Box
              component="img"
              alt="H&CO logo"
              src="/hco.svg"
              loading="lazy"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
