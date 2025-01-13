import React from "react";

interface PlainTextProps {
  text: string;
}

export default function PlainText(props: PlainTextProps) {
  return <>{props.text}</>;
}
