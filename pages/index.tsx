"use client";

import * as React from "react";
import "dotenv/config";
import { Box } from "@mui/material";
//components
import { Nav } from "../src/Components/Nav";
import { Banner } from "../src/Components/Banner";
import { Features } from "../src/Components/Features";
import { Footer } from "../src/Components/Footer";
//styling
import * as styles from "../src/Styles/styles";

export default function Home() {
  return (
    <>
      <Nav />
      <Box sx={styles.main}>
        <Banner />
        <Features />
      </Box>
      <Footer />
    </>
  );
}
