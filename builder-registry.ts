"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Button from "./components/Button/Button";
import FlexGroup from "./components/FlexGroup/FlexGroup";
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
      name: "className",
      type: "string",
      friendlyName: "Custom CSS Class",
    },
    {
      name: "padding",
      type: "number",
      required: true,
      defaultValue: 2,
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
      name: "headerElement",
      type: "string",
      defaultValue: "h1",
      enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
      required: true,
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Header",
      required: true,
    },
    {
      name: "bold",
      type: "boolean",
      defaultValue: true,
      required: true,
    },
    {
      name: "italic",
      type: "boolean",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(FlexGroup), {
  name: "FlexGroup",
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
      name: "gap",
      type: "string",
      defaultValue: "0",
    },
    {
      name: "justify",
      type: "string",
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
  ],
});
