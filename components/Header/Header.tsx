"use client";

import React from "react";
import styles from "./Header.module.css";
import { Box, Button } from "@mantine/core";

const Header = () => {
  return (
    <Box component={"header"} className={styles.header}>
      <Box className={styles.title}>Emojiperanto</Box>
      <Box className={styles.subtitle}>
        A <u>NSFW</u> emoji guide to express concepts.
      </Box>
      <Box className={styles.buttons}>
        <Button
          color={"gray"}
          onClick={() => {
            window.open(
              "https://github.com/LorenzoScebba/emojiperanto",
              "_blank"
            );
          }}
        >
          Github
        </Button>
        <Button
          color={"pink"}
          onClick={() => {
            window.open(
              "https://github.com/LorenzoScebba/emojiperanto/blob/master/CONTRIBUTORS.md",
              "_blank"
            );
          }}
        >
          Contributors
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
