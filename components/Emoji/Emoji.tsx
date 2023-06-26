import React from "react";
import { Emoji } from "@/data/emojis";
import styles from "./Emoji.module.css";

const Emoji = (props: Emoji) => {
  return (
    <div className={styles.emoji}>
      <div
        className={styles.emojiIcon}
        style={{ background: props.background || "transparent" }}
      >
        {props.emoji}
      </div>
      <div className={styles.text}>
        <div>:art:</div>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export default Emoji;
