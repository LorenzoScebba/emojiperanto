"use client";

import React, { useState } from "react";
import data from "@/data/emojis";
import styles from "./Main.module.css";
import Emoji from "@/components/Emoji/Emoji";
import { Box, Group, Switch, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Main = () => {
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
            <Emoji key={d.title} showShortcode={enableShortcodes} {...d} />
          ))}
      </Box>
    </Box>
  );
};

export default Main;
