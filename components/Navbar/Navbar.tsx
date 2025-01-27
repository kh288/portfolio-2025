import React from "react";
import styles from "./Navbar.module.css";

/**
 * A component that renders a navbar with a shadow
 * @param {React.ReactNode} children - The children to render
 * @param {string} className - The class name to add to the navbar
 * @param {string} shadow - The shadow to add to the navbar
 * @param {number} padding - The padding around the navbar
 */
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  padding: number;
}

export default function Navbar(props: NavbarProps) {
  const className = props.className ? props.className : "";
  let shadow = "";
  if (props.shadow !== "none") shadow = "shadow";

  return (
    <header
      className={`${styles.navbar} ${shadow} shadow-${props.shadow} padding[padding-data] ${className}`}
      padding-data={props.padding}>
      {props.children}
    </header>
  );
}
