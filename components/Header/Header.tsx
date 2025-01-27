import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  text: string;
  headerElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold: boolean;
  italic: boolean;
  fontSize: number;
}

export default function Header(props: HeaderProps) {
  const HeaderElement = props.headerElement;
  const bold = props.bold ? "font-bold" : "";
  const italic = props.italic ? "italic" : "";
  const fontSize = props.fontSize;
  return (
    <HeaderElement
      className={`${styles.header} ${
        styles[props.headerElement]
      } ${bold} ${italic}`}
      style={{ fontSize: fontSize }}>
      {props.text}
    </HeaderElement>
  );
}
