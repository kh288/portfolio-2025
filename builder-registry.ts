"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Button from "./components/Button/Button";
import DisplayContainer from "./components/DisplayContainer/DisplayContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "buttonElement",
      type: "string",
      enum: ["button", "link"],
      defaultValue: "button",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "secondary", "ghost", "link", "outline", "destructive"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "string",
      enum: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
    },
    {
      name: "href",
      type: "string",
      meta: {
        ts: "Url",
      },
      required: false,
    },
  ],
});

Builder.registerComponent(withChildren(Navbar), {
  name: "Navbar",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "padding",
      type: "number",
      defaultValue: 2,
      required: true,
    },
    {
      name: "shadow",
      type: "string",
      defaultValue: "none",
      enum: ["none", "sm", "md", "lg", "xl", "2xl"],
      required: true,
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "bold",
      type: "boolean",
      defaultValue: true,
      required: true,
    },
    {
      name: "headerElement",
      type: "string",
      defaultValue: "h1",
      enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
      required: true,
    },
    {
      name: "italic",
      type: "boolean",
      required: true,
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Header",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(DisplayContainer), {
  name: "DisplayContainer",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "display",
      type: "string",
      enum: [
        "block",
        "flex",
        "grid",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "none",
      ],
      required: true,
      defaultValue: "block",
    },
    {
      name: "justify",
      type: "string",
      defaultValue: "start",
      enum: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "inherit",
        "left",
        "right",
        "space-around",
        "space-between",
        "space-evenly",
        "start",
        "stretch",
      ],
      required: true,
    },
    {
      name: "gap",
      type: "string",
      defaultValue: "0",
    },
    {
      name: "marginAuto",
      type: "boolean",
      required: true,
      defaultValue: false,
    },
    {
      showIf: (options) => !options.get("marginAuto"),
      name: "margin",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "padding",
      type: "number",
      defaultValue: 0,
      required: true,
    },
  ],
});
