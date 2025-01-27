import React from "react";
import styles from "./styles.module.css";

/**
 * A component that renders a group of children with a gap between each child using flex
 * @param {React.ReactNode} children - The children to render
 * @param {number} gap - The gap between each child
 * @param {number} padding - The padding around the children
 * @param {string} justify - The justify-content value for the flex container
 */
interface FlexGroupProps {
  children: React.ReactNode;
  gap: number;
  padding: number;
  justify:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "inherit";
}

export default function FlexGroup(props: FlexGroupProps) {
  return (
    <div
      className={`flex`}
      style={{
        gap: `${props.gap * 0.25}rem`,
        padding: `${props.padding * 0.25}rem`,
        justifyContent: props.justify,
      }}>
      {props.children}
    </div>
  );
}
