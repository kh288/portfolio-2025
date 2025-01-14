import React from "react";
import styles from "./styles.module.css";

interface HeaderProps {
  text: string;
  headerElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold: boolean;
  italic: boolean;
}

export default function Header(props: HeaderProps) {
  const HeaderElement = props.headerElement;
  const bold = props.bold ? "font-bold" : "";
  const italic = props.italic ? "italic" : "";
  return (
    <HeaderElement
      className={`${styles.header} ${
        styles[props.headerElement]
      } ${bold} ${italic}`}>
      {props.text}
    </HeaderElement>
  );
}
