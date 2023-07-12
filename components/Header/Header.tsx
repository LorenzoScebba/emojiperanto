"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { Box, Button } from "@mantine/core";

const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "🤯",
  "😬",
  "😰",
  "😱",
  "🥵",
  "🥶",
  "😳",
  "🤪",
  "😵",
  "🥴",
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Header = () => {
  const [emoji] = useState(emojis[getRandomInt(0, emojis.length - 1)])

  return (
    <Box component={"header"} className={styles.header}>
      <Box className={styles.title} suppressHydrationWarning>Emojiperanto {emoji}</Box>
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
