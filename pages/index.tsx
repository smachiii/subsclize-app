import Head from "next/head";
import { Inter } from "@next/font/google";
import { css } from "@emotion/react";
import { global } from "../tokens.json";
import { SerializedStyles } from "@emotion/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>SUBSCLiZE</title>
        <meta
          name="description"
          content="サブスクリプション管理アプリケーション"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p css={title}>SUBSCLiZE</p>
      </main>
    </>
  );
}

const title = css`
  color: ${global.colors.secondary.value};
`;
