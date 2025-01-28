import React, { JSX } from "react";
// import styles from "./styles.module.css"; // Comment this back in when styles.modules.css is being used.

interface DisplayContainerProps {
  children: React.ReactNode;
  display:
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid"
    | "block"
    | "inline-block"
    | "none";
  gap: number;
  padding: number;
  marginAuto: boolean;
  margin: number;
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

/**
 * @description A component that renders a group of children with a gap between each child using flex
 * @param {React.ReactNode} props.children - The children to render
 * @param {string} props.display - The display value for the container
 * @param {number} props.gap - The gap between each child
 * @param {number} props.padding - The padding around the children
 * @param {boolean} props.marginAuto - Whether the margin should be set to auto
 * @param {number} props.margin - The margin around the children
 * @param {string} props.justify - The justify-content value for the flex container
 * @returns {JSX.Element} The FlexGroup component
 */
export default function DisplayContainer(
  props: DisplayContainerProps
): JSX.Element {
  const margin = props.marginAuto ? "auto" : `${props.margin * 0.25}rem`;
  return (
    <div
      style={{
        display: props.display,
        gap: `${props.gap * 0.25}rem`,
        padding: `${props.padding * 0.25}rem`,
        margin: margin,
        justifyContent: props.justify,
      }}>
      {props.children}
    </div>
  );
}
