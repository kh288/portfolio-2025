import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { Url } from "next/dist/shared/lib/router/router";

interface ButtonProps {
  children: React.ReactNode;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size: "default" | "sm" | "lg" | "icon";
  buttonElement?: "button" | "link";
  href?: Url;
  className?: string;
}

export default function Button(props: ButtonProps) {
  if (props.buttonElement === "link") {
    const hrefURL = props.href || "";
    return (
      <Link
        href={hrefURL}
        className={`${styles.button} ${styles[`button-${props.variant}`]} ${
          styles[`size-${props.size}`]
        }`}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${props.className} ${styles.button} ${
          styles[`button-${props.variant}`]
        } ${styles[`size-${props.size}`]}`}>
        {props.children}
      </button>
    );
  }
}
