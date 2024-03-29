import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ColorSchemeScript, Flex, MantineProvider } from "@mantine/core";
import { theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Train Pro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link href="/kettlebell.svg" rel="shortcut icon" />
        <link href="https://css.gg/css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          <Flex
            p={48}
            direction="column"
            mih={"90vh"}
            align="center"
            justify="space-between"
          >
            {children}
          </Flex>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
