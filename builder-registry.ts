"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import PlainText from "./components/PlainText/PlainText";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(PlainText, {
  name: "PlainText",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
      defaultValue: "Plain Text",
    },
  ],
  defaultStyles: {
    margin: "0 0 0 0",
  },
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "buttonElement",
      type: "string",
      enum: ["button", "link"],
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "href",
      type: "string",
      meta: {
        ts: "Url",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["default", "icon", "lg", "sm"],
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "destructive", "ghost", "link", "outline", "secondary"],
    },
  ],
});
