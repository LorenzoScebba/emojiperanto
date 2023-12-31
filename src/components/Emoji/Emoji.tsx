import styles from "./Emoji.module.css";
import { Box, CopyButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import get from "lodash.get";
import { IEmoji } from "../../data/emojis.ts";
import uEmojiParser from "universal-emoji-parser";
import { useCallback, useEffect, useRef, useState } from "react";
import { Carousel, CarouselSlide, Embla } from "@mantine/carousel";
import { useDebouncedState } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";

interface EmojiProps extends IEmoji {
  copyAsShortcode?: boolean;
  language: string;
}

const Emoji = (props: EmojiProps) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [currentEmoji, setCurrentEmoji] = useDebouncedState(0, 50);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const emoji = get(props, `translations.${props.language}.emoji`, props.emoji);
  const description = get(
    props,
    `translations.${props.language}.description`,
    props.description,
  );

  const shortCode = uEmojiParser
    .parse(emoji[currentEmoji], { parseToShortcode: true, parseToHtml: false })
    .replace(/::/g, ": :")
    .replace(/[\u200B-\u200D\uFEFF]/g, " ");

  const copyAndShowNotification = (copy: () => void) => {
    copy();
    notifications.show({
      title: `Emoji ${emoji[currentEmoji]} copied!`,
      message: `You can now paste it anywhere!`,
      color: "blue",
      autoClose: 3000,
      withBorder: true,
      classNames: {
        root: styles.notification,
      },
    });
  };

  const setCurrentEmojiFromEmbla = useCallback(() => {
    if (embla) {
      setCurrentEmoji(embla.selectedScrollSnap());
    }
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("settle", setCurrentEmojiFromEmbla);
    }

    return () => {
      if (embla) {
        embla.off("settle", setCurrentEmojiFromEmbla);
      }
    };
  }, [embla]);

  return (
    <Box className={styles.emoji}>
      <CopyButton
        value={props.copyAsShortcode ? shortCode : emoji[currentEmoji]}
      >
        {({ copy }) => {
          if (emoji.length > 1)
            return (
              <Carousel
                withControls
                withIndicators
                getEmblaApi={setEmbla}
                draggable
                slideGap={"xs"}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                onClick={(ev) => {
                  if (get(ev, "target.nodeName", "DIV") !== "DIV") return;
                  copyAndShowNotification(copy);
                }}
                classNames={{
                  root: styles.emojiIconCarousel,
                  controls: styles.emojiIconCarouselControls,
                }}
              >
                {emoji.map((e) => (
                  <CarouselSlide
                    key={e}
                    className={styles.emojiIconCarouselSlide}
                  >
                    {e}
                  </CarouselSlide>
                ))}
              </Carousel>
            );

          return (
            <Box
              onClick={() => copyAndShowNotification(copy)}
              className={styles.emojiIcon}
            >
              {emoji}
            </Box>
          );
        }}
      </CopyButton>
      <Box className={styles.texts}>
        <Box className={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default Emoji;
