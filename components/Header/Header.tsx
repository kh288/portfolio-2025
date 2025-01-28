import React, { JSX } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  headerElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  bold: boolean;
  italic: boolean;
}

/**
 * @description A component that renders a header element
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} props.headerElement - The header element to render
 * @param {string} props.text - The text to render in the header
 * @param {boolean} props.bold - Whether the header should be bold
 * @param {boolean} props.italic - Whether the header should be italic
 * @returns {JSX.Element} The Header component `<h*>Header</h*>`
 */
export default function Header(props: HeaderProps): JSX.Element {
  const HeaderElement = props.headerElement;
  return (
    <HeaderElement
      className={`${styles.header} ${styles[props.headerElement]} ${
        props.bold ? "font-bold" : ""
      } ${props.italic ? "italic" : ""}`}>
      {props.text}
    </HeaderElement>
  );
}
