import ConstructionState from "@/components/construction-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
    return (
      <main className="text-center">
        <ConstructionState />
        <Link href="/">
            <Button>Go back</Button>
        </Link>
      </main>
    );
  }