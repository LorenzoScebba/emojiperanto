"use client";

import React, { useState } from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";
import { Box, Group, Switch, TextInput, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useLocalStorage } from "@mantine/hooks";

const Main = () => {
  const [language, setLanguage] = useState("en");
  const [enableShortcodes, setEnableShortcodes] = useState(false);
  const [filter, setFilter] = useState("");

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
      <Box className={styles.autogrid}>
        {data
          .filter(
            (d) =>
              d.emoji.includes(filter) ||
              d.title.toLowerCase().includes(filter.toLowerCase()) ||
              d.description.toLowerCase().includes(filter.toLowerCase())
          )
          .map((d) => (
            <Emoji
              key={d.title}
              showShortcode={enableShortcodes}
              language={language}
              {...d}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Main;
