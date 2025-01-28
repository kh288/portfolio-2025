import React, { JSX } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  children: React.ReactNode;
  shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  padding: number;
}

/**
 * A component that renders a navbar with a shadow
 * @param {React.ReactNode} props.children - The children to render
 * @param {string} props.shadow - The shadow to add to the navbar
 * @param {number} props.padding - The padding around the navbar
 * @returns {JSX.Element} The Navbar component
 */
export default function Navbar(props: NavbarProps): JSX.Element {
  let shadow = "";
  if (props.shadow !== "none") shadow = "shadow";

  return (
    <header
      className={`${styles.navbar} ${shadow} shadow-${props.shadow}`}
      style={{ padding: `${props.padding * 0.25}rem` }}>
      {props.children}
    </header>
  );
}
