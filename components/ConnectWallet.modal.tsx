import { Button, Modal } from "antd";
import React, { useState } from "react";
import { QuestionCircleOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./ConnectWallet.module.css";

const ConnectWalletModal: React.FC<{
  button: React.ReactNode;
  open: boolean;
  setOpen: (x: boolean) => void;
}> = ({ button, open, setOpen }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {button}
      <Modal
        width={360}
        height={350}
        styles={{
          header: {
            background: "color(srgb 0.0705882 0.0745098 0.0745098)",
          },
          content: {
            background: "color(srgb 0.0705882 0.0745098 0.0745098)",
            color: "white",
            borderRadius: 36,
          },
        }}
        centered
        className={styles.modal}
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
        title={
          <div
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <QuestionCircleOutlined
              style={{ marginTop: 3, float: "left", cursor: "pointer" }}
            />
            <p>Connect Wallet</p>
          </div>
        }
        loading={loading}
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;
