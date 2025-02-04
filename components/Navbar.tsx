import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, LogIn } from "lucide-react";

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <Zap className="h-8 w-8 text-[#175ea8]" />
        <span className="ml-2 text-xl font-bold text-[#175ea8]">
          StrategyPro
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-[#175ea8]"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-[#175ea8]"
          href="/ai-toolkit"
        >
          AI Toolkit
        </Link>
        <Link
          className="text-sm font-medium hover:text-[#175ea8]"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:text-[#175ea8]"
          href="/resources"
        >
          Resources
        </Link>
      </nav>
      <div className="ml-4 flex items-center space-x-2">
        <Link href="/login">
          <Button variant="outline" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
        <Link href="/book-demo">
          <Button
            size="sm"
            className="bg-[#175ea8] text-white hover:bg-[#1e4b8d]"
          >
            Book a Demo
          </Button>
        </Link>
      </div>
    </header>
  );
}
