import { Button } from "@/components/ui/button";
import { Terminal, Code2, Briefcase, Codepen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center space-y-16 text-center">
      <div className="space-y-6 p-3">
        <h1 className="text-2xl font-bold tracking-tighter m-2 p-4 bg-red">
          <p className="text-xl">Welcome to </p>
          <span className="text-6xl bg-gradient-to-tl from-blue-600 via-green-500 to-teal-300 inline-block text-transparent bg-clip-text py-2">Phatabyte.tech</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Crafting exceptional digital experiences through innovative software development
          and creative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card">
          <Terminal className="w-12 h-12 text-primary" />
          <h2 className="text-xl font-semibold">Clean Code</h2>
          <p className="text-muted-foreground text-sm">
            Writing maintainable and efficient code that scales
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card">
          <Code2 className="w-12 h-12 text-primary" />
          <h2 className="text-xl font-semibold">Modern Tech</h2>
          <p className="text-muted-foreground text-sm">
            Leveraging cutting-edge technologies and frameworks
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card">
          {/* <Briefcase className="w-12 h-12 text-primary" /> */}
          <Codepen  className="w-12 h-12 text-primary"/>
          <h2 className="text-xl font-semibold">Solutions</h2>
          <p className="text-muted-foreground text-sm">
            Delivering robust and scalable software solutions
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        {/* <Link href="/portfolio">
          <Button size="lg">
            View Portfolio1
          </Button>
        </Link> */}
        <Link href="/portfolio">
          <Button size="lg">
            View Portfolio
          </Button>
        </Link>
        <Link href="/cv">
          <Button size="lg" variant="outline">
            View CV
          </Button>
        </Link>
      </div>
    </div>
  );
}