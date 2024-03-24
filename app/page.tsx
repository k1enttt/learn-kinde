import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <h1>This is Home</h1>
      <Link href="/dashboard">
        <Button>Click me</Button>
      </Link>
    </main>
  );
}
