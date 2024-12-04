import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold text-xl">Phatabyte.tech</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/portfolio">
            <Button variant="ghost">Portfolio</Button>
          </Link>
          <Link href="/cv">
            <Button variant="ghost">CV</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}