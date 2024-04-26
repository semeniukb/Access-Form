import React from "react";
import styles from "./Typography.module.css";
import { clsx } from "clsx";

type TypographyVariant = "title" | "paragraph16_regular" | "paragraph14_regular";
type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};
export const Typography = <Tag extends TypographyTag>({
  children,
  variant,
  tag = "div",
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
