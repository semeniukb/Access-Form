import React, { forwardRef, useId } from "react";
import styles from "./Input.module.css";
import { clsx } from "clsx";

type InputProps<Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"> = {
  label?: string;
  component?: Component;
  error?: string;
} & React.ComponentProps<Component>;

export const Input = forwardRef(
  (
    { label, component, className, error, id: externalId, ...props }: InputProps<"input">,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const internalId = useId();
    const id = externalId ?? internalId;
    const Component = component || "input";

    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <Component className={clsx(styles.input, className)} {...props} id={id} ref={ref} />
        {error && <p className={clsx(styles.error)}>{error}</p>}
      </div>
    );
  },
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> },
) => React.ReactElement;
