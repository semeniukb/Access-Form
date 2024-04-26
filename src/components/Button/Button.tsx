import React from "react";
import styles from "./Button.module.css";
import { clsx } from "clsx";

type ButtonVariants = "contained" | "outlined";
interface ButtonProps extends React.ComponentProps<"button"> {
  variant: ButtonVariants;
  children: React.ReactNode;
  loading?: boolean;
}
export const Button = ({ children, variant, className, loading, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {loading ? <>loading</> : <>{children}</>}
    </button>
  );
};
