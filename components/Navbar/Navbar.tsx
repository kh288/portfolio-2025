import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Navbar(props: NavbarProps) {
  let shadow = "";
  if (props.shadow !== "none") {
    shadow = "shadow";
  }
  return (
    <header
      className={`flex p-2 gap-2 content-center justify-between ${shadow} shadow-${props.shadow} ${props.className}`}>
      {props.children}
    </header>
  );
}
