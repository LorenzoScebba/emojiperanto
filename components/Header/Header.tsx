"use client";

import React from "react";
import styles from "./Header.module.css";
import Button from "@/components/Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Emojiperanto</div>
      <div className={styles.subtitle}>
        A <u>NSFW</u> emoji guide to express concepts.
      </div>
      <div className={styles.buttons}>
        <Button
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
          onClick={() => {
            window.open(
              "https://github.com/LorenzoScebba/emojiperanto/blob/master/CONTRIBUTORS.md",
              "_blank"
            );
          }}
        >
          Contributors
        </Button>
      </div>
    </header>
  );
};

export default Header;
