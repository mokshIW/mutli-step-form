import Image from "next/image";
import MultiStepForm from "../components/multi-step-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-br from-slate-900 to-neutral-800">
      <h1 className="text-2xl font-bold py-16">Multi-Step Form with Next.js</h1>
      <MultiStepForm />
    </div>
  );
}
