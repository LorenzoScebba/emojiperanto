"use client";

import React from "react";
import styles from "./Header.module.css";
import Button from "@/components/Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Emojiperanto</div>
      <div className={styles.subtitle}>An emoji guide to express concepts.</div>
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
        <Button>Contributors</Button>
      </div>
    </header>
  );
};

export default Header;
