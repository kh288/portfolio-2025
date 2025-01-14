"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import PlainText from "@/components/PlainText";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
      friendlyName: "Custom CSS Class",
      type: "string",
      required: false,
    },
    {
      name: "shadow",
      type: "string",
      enum: ["none", "sm", "md", "lg", "xl", "2xl"],
      required: true,
      defaultValue: "none",
    },
  ],
});
