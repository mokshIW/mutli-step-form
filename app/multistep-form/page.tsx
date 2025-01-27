import Form from "@/components/Form";
import React from "react";

export default function MultiStepFormExample() {
  return (
    <div className="relative w-full  h-full flex flex-col items-center justify-start bg-gradient-to-br from-slate-900 to-neutral-800">
      <h1 className="text-2xl font-bold py-16">Multi-Step Form with Next.js</h1>
      <Form />
    </div>
  );
}
