import React from "react";
import { IEmoji } from "@/data/emojis";
import styles from "./Emoji.module.css";
import { Box, CopyButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";

interface EmojiProps extends IEmoji {
  showShortcode?: boolean;
}

const Emoji = (props: EmojiProps) => {
  const copyAndShowNotification = (copy: () => void) => {
    copy();
    notifications.show({
      title: `Emoji ${props.emoji} copied!`,
      message: `You can now paste it anywhere!`,
      color: "blue",
      autoClose: 3000,
      withBorder: true,
      classNames: {
        root: styles.notification,
      },
    });
  };

  return (
    <Box className={styles.emoji}>
      <CopyButton value={props.emoji}>
        {({ copied, copy }) => (
          <Box
            onClick={() => copyAndShowNotification(copy)}
            className={styles.emojiIcon}
          >
            {props.emoji}
          </Box>
        )}
      </CopyButton>
      <Box className={styles.texts}>
        {props.showShortcode && (
          <Box className={styles.title}>{props.title}</Box>
        )}
        <Box className={styles.description}>{props.description}</Box>
      </Box>
    </Box>
  );
};

export default Emoji;
