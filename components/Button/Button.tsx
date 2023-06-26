"use client";

import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
