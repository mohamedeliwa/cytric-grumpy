import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, InputNumber } from "antd";
import styles from "./Purchase.Form.module.css";
import ConnectWalletModal from "./ConnectWallet.modal";

type FieldType = {
  username?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PurchaseForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Card className={styles.card}>
      <h3 className={styles.form_title}>Participation Details</h3>
      <p className={styles.form_p}>
        Minimum buy in: <span className={styles.form_limits}>0.005 ETH</span>
      </p>
      <p className={styles.form_p}>
        Maximum buy in: <span className={styles.form_limits}>1 ETH</span>
      </p>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <InputNumber
            className={styles.form_input}
            precision={3}
            step={0.01}
            min={0.3}
            max={1}
            defaultValue={0.3}
          />
        </Form.Item>

        <Form.Item>
          <ConnectWalletModal
            open={open}
            setOpen={setOpen}
            button={
              <Button
                className={styles.form_btn}
                type="primary"
                // htmlType="submit"
                block
                onClick={() => setOpen(true)}
              >
                Connect Wallet
              </Button>
            }
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PurchaseForm;
