import React from "react";
import Link from "next/link";
import "./styles.css";
import { Url } from "next/dist/shared/lib/router/router";

interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  buttonElement?: "button" | "link";
  href?: Url;
}

export default function Button(props: ButtonProps) {
  if (props.buttonElement === "link") {
    const hrefURL = props.href || "";
    return (
      <Link
        href={hrefURL}
        className={`button button-${props.variant} size-${props.size}`}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={`button button-${props.variant} size-${props.size}`}>
        {props.children}
      </button>
    );
  }
}
