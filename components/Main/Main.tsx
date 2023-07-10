"use client";

import React, { useState } from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";
import {
  Box,
  Group,
  Select,
  Switch,
  TextInput,
  Text,
  Stack,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import get from "lodash.get";
import Image from "next/image";

const Main = () => {
  const [language, setLanguage] = useState("en");
  const [enableShortcodes, setEnableShortcodes] = useState(false);
  const [filter, setFilter] = useState("");

  const dataFiltered = data.filter((d) => {
    const emoji = get(d, `translations.${language}.emoji`, d.emoji);
    const title = get(d, `translations.${language}.title`, d.title);
    const description = get(
      d,
      `translations.${language}.description`,
      d.description
    );
    return (
      emoji.includes(filter) ||
      title.toLowerCase().includes(filter.toLowerCase()) ||
      description.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Box component={"main"} className={styles.main}>
      <Group justify="flex-end" mb={8}>
        <Switch
          checked={enableShortcodes}
          onChange={(v) => setEnableShortcodes(v.currentTarget.checked)}
          size="md"
          onLabel="ON"
          offLabel="OFF"
          label="Shorcodes"
          labelPosition={"left"}
        />
        <Select
          key={language}
          placeholder="Language"
          data={[
            {
              value: "en",
              label: "English",
            },
            {
              value: "it",
              label: "Italian",
            },
            {
              value: "de",
              label: "Deutsch",
            },
            {
              value: "fr",
              label: "French",
            },
            {
              value: "es",
              label: "Spanish",
            },
          ]}
          value={language}
          onChange={(v) => setLanguage(v || "en")}
        />
      </Group>
      <TextInput
        mb={16}
        leftSection={<IconSearch />}
        type={"text"}
        placeholder={"Search concept"}
        onChange={(ev) => setFilter(ev.currentTarget.value)}
      />

      {dataFiltered.length > 0 ? (
        <>
          <Box className={styles.autogrid}>
            {dataFiltered.map((d) => (
              <Emoji
                key={d.id}
                showShortcode={enableShortcodes}
                language={language}
                {...d}
              />
            ))}
          </Box>
        </>
      ) : (
        <Stack className={styles.centered}>
          <Text>No results found</Text>
          <Text>Try to change language or search term</Text>
          <Image
            width={300}
            height={300}
            src={"https://source.unsplash.com/random/300x300?kitten"}
            alt={"kitten"}
          />
        </Stack>
      )}
    </Box>
  );
};

export default Main;
