import React from "react";
import Tiptap from "@/components/TipTap";

export default function TipTapStarter() {
  return (
    <div className="flex flex-col items-center justify-start gap-y-4 w-full h-screen bg-slate-900">
      <h1 className="text-2xl font-bold py-16">TipTap with Next.js</h1>
      <Tiptap />
    </div>
  );
}
