import React from "react";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import theme from "@/app/theme";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emojiperanto - NSFW emoji guide to express concepts",
  description: "Emojiperanto is a NSFW emoji guide to express concepts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
