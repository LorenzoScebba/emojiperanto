import styles from "./Emoji.module.css";
import { Box, CopyButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import get from "lodash.get";
import { IEmoji } from "../../data/emojis.ts";
import uEmojiParser from "universal-emoji-parser";

interface EmojiProps extends IEmoji {
  copyAsShortcode?: boolean;
  language: string;
}

const Emoji = (props: EmojiProps) => {
  const emoji = get(props, `translations.${props.language}.emoji`, props.emoji);
  const description = get(
    props,
    `translations.${props.language}.description`,
    props.description,
  );

  const shortCode = uEmojiParser
    .parse(emoji, { parseToShortcode: true, parseToHtml: false })
    .replace(/::/g, ": :")
    .replace(/[\u200B-\u200D\uFEFF]/g, " ");

  const copyAndShowNotification = (copy: () => void) => {
    copy();
    notifications.show({
      title: `Emoji ${emoji} copied!`,
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
      <CopyButton value={props.copyAsShortcode ? shortCode : emoji}>
        {({ copy }) => (
          <Box
            onClick={() => copyAndShowNotification(copy)}
            className={styles.emojiIcon}
          >
            {emoji}
          </Box>
        )}
      </CopyButton>
      <Box className={styles.texts}>
        <Box className={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default Emoji;
