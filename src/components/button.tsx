"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div >
      <Button
        borderRadius="2rem"
        className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
