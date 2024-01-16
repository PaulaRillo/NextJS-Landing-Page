"use client";

import { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import { List } from "@phosphor-icons/react";
//styling
import theme from "../Theme/theme";
import * as styles from "../Styles/styles";
import { LoginButton } from "./LoginButton";

export const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ bgcolor: theme.palette.primary.dark }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ height: "90px" }}>
          <IconButton sx={styles.menu} onClick={toggleDrawer}>
            <List size={32} weight="bold" />
          </IconButton>
          <Drawer
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{ "& .MuiDrawer-paper": { width: "80%", maxWidth: "350px" } }}
          >
            <Stack spacing={2} sx={{ m: 4 }}>
              <LoginButton />
              <Button variant="contained" color="error">
                Contact Sales
              </Button>
            </Stack>
          </Drawer>
          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box
              component="img"
              alt="Postolo logo"
              src="/postolo.svg"
              loading="lazy"
              sx={{
                [theme.breakpoints.down("md")]: {
                  maxWidth: "150px",
                  float: "right",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Button variant="text" sx={{ color: theme.palette.common.white }}>
              Features
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <LoginButton />
            <Button variant="contained" color="error">
              Contact Sales
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
