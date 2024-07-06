import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <h1 className="text-white text-3xl underline">Home</h1>
      <Button>Click me </Button>
    </div>
  )}