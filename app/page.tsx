"use client";

import styles from "./page.module.css";
import { Layout, Space } from "antd";
import PurchaseForm from "@/components/Purchase.Form";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <Space className={styles.header}>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://grumpy.meme/images/logo.png"
          alt="logo"
          width={200}
          height={83.5}
        />
        <w3m-button />
      </Space>
      <Space className={styles.content}>
        <h1 className={styles.content_header}>Presale</h1>
        <p className={styles.content_first_p}>
          Congratulations, you made it to our presale, which gives you the{" "}
          <br />
          opportunity to buy as one of the first for the cheapest price.
        </p>
        <PurchaseForm />
        <h3 className={styles.content_warning}>Warning</h3>
        <p>
          Do not send funds from an exchange. You will lose your funds if you
          do.
          <br /> Make sure you are connected to the Ethereum Mainnet and have a
          sufficient amount of ETH in your wallet.
          <br /> All amounts below 0.005 and above 1 ETH will be refunded.
        </p>
      </Space>
    </Layout>
  );
}
