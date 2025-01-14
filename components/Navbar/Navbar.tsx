import React from "react";
import styles from "./styles.module.css";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Navbar(props: NavbarProps) {
  const className = props.className ? props.className : "";
  let shadow = "";
  if (props.shadow !== "none") shadow = "shadow";

  return (
    <header
      className={`${styles.navbar} ${shadow} shadow-${props.shadow} ${className}`}>
      {props.children}
    </header>
  );
}
