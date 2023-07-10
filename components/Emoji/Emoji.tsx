import React from "react";
import { IEmoji } from "@/data/emojis";
import styles from "./Emoji.module.css";
import { Box, CopyButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import get from "lodash.get";

interface EmojiProps extends IEmoji {
  showShortcode?: boolean;
  language: string;
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

  const emoji = get(props, `translations.${props.language}.emoji`, props.emoji);
  const title = get(props, `translations.${props.language}.title`, props.title);
  const description = get(
    props,
    `translations.${props.language}.description`,
    props.description,
  );

  return (
    <Box className={styles.emoji}>
      <CopyButton value={emoji}>
        {({ copied, copy }) => (
          <Box
            onClick={() => copyAndShowNotification(copy)}
            className={styles.emojiIcon}
          >
            {emoji}
          </Box>
        )}
      </CopyButton>
      <Box className={styles.texts}>
        {props.showShortcode && <Box className={styles.title}>{title}</Box>}
        <Box className={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default Emoji;
