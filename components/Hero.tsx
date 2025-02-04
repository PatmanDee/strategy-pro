import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#175ea8] via-[#1e4b8d] to-[#0c2d5f] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100">
              {description}
            </p>
          </div>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-[#175ea8] text-white hover:bg-[#1e4b8d]"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#175ea8] hover:bg-blue-50 border-2 border-white"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
