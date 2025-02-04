import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { Target, Users, Trello, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Elevate Performance, Accelerate Strategy"
        description="StrategyPro: The all-in-one SaaS solution for modern performance management and strategic planning. Empower your team with Balanced Scorecard, 360-degree assessments, and AI-powered insights."
      />

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#175ea8]">
            Powerful Features for Strategic Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              title="Balanced Scorecard"
              description="Align and track your organization's strategy across multiple perspectives for comprehensive performance management."
            />
            <FeatureCard
              icon={Users}
              title="360° Assessment"
              description="Gain comprehensive insights with multi-source feedback for holistic performance evaluation."
            />
            <FeatureCard
              icon={Trello}
              title="Action Plans"
              description="Create, assign, and track strategic action plans with our intuitive Kanban-style board."
            />
          </div>
        </div>
      </section>

      <section
        id="ai-toolkit"
        className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#175ea8]">
            AI-Powered Strategy Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Brain}
              title="Strategic Insights Engine"
              description="Leverage AI to analyze performance data and generate strategic recommendations for your team and organization."
            />
            <FeatureCard
              icon={BarChart3}
              title="Predictive Analytics"
              description="Utilize AI-driven predictive models to forecast performance trends and identify areas for improvement."
            />
          </div>
        </div>
      </section>

      {/* Add Pricing and Resources sections here */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#175ea8] via-[#1e4b8d] to-[#0c2d5f] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Performance Management?
              </h2>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Get started with StrategyPro today and see how our AI-powered
                tools can elevate your team's performance and strategy
                execution.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1 bg-white text-gray-900"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-white text-[#175ea8] hover:bg-blue-100"
                >
                  Get Started
                </Button>
              </form>
              <p className="text-sm text-blue-100">
                Start your free 14-day trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
