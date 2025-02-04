import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  CheckCircle,
  Users,
  Trello,
  Brain,
  Target,
  Zap,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-8 w-8 text-[#175ea8]" />
          <span className="ml-2 text-xl font-bold text-[#175ea8]">
            StrategyPro
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#175ea8]"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#175ea8]"
            href="#ai-toolkit"
          >
            AI Toolkit
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#175ea8]"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#175ea8]"
            href="#resources"
          >
            Resources
          </Link>
        </nav>
        <div className="ml-4 flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
          <Button
            size="sm"
            className="bg-[#175ea8] text-white hover:bg-[#1e4b8d]"
          >
            Book a Demo
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#175ea8] via-[#1e4b8d] to-[#0c2d5f] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Elevate Performance, Accelerate Strategy
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100">
                  StrategyPro: The all-in-one SaaS solution for modern
                  performance management and strategic planning. Empower your
                  team with Balanced Scorecard, 360-degree assessments, and
                  AI-powered insights.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-[#175ea8] hover:bg-blue-100"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-[#175ea8]"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#175ea8]">
              Powerful Features for Strategic Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Target className="h-12 w-12 mb-4 text-[#175ea8]" />
                <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                  Balanced Scorecard
                </h3>
                <p className="text-gray-600">
                  Align and track your organization's strategy across multiple
                  perspectives for comprehensive performance management.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Users className="h-12 w-12 mb-4 text-[#175ea8]" />
                <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                  360° Assessment
                </h3>
                <p className="text-gray-600">
                  Gain comprehensive insights with multi-source feedback for
                  holistic performance evaluation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Trello className="h-12 w-12 mb-4 text-[#175ea8]" />
                <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                  Action Plans
                </h3>
                <p className="text-gray-600">
                  Create, assign, and track strategic action plans with our
                  intuitive Kanban-style board.
                </p>
              </div>
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
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Brain className="h-12 w-12 mb-4 text-[#175ea8]" />
                <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                  Strategic Insights Engine
                </h3>
                <p className="text-gray-600">
                  Leverage AI to analyze performance data and generate strategic
                  recommendations for your team and organization.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <BarChart3 className="h-12 w-12 mb-4 text-[#175ea8]" />
                <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                  Predictive Analytics
                </h3>
                <p className="text-gray-600">
                  Utilize AI-driven predictive models to forecast performance
                  trends and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#175ea8]">
              Flexible Pricing for Every Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#175ea8]">
                  Starter
                </h3>
                <p className="text-4xl font-bold mb-4 text-[#175ea8]">
                  $29<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Up to 10 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Basic Balanced Scorecard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Simple action plans
                  </li>
                </ul>
                <Button className="mt-auto bg-[#175ea8] text-white hover:bg-[#1e4b8d]">
                  Choose Plan
                </Button>
              </div>
              <div className="flex flex-col p-6 bg-[#175ea8] text-white rounded-lg shadow-lg scale-105 transform">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-4">
                  $79<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Up to 50 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Advanced Balanced Scorecard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    360° assessments
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-[#175ea8] hover:bg-blue-100">
                  Choose Plan
                </Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#175ea8]">
                  Enterprise
                </h3>
                <p className="text-4xl font-bold mb-4 text-[#175ea8]">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="mt-auto bg-[#175ea8] text-white hover:bg-[#1e4b8d]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="resources"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#175ea8]">
              Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Knowledge Base"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                    Knowledge Base
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access our comprehensive library of articles, guides, and
                    best practices.
                  </p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Strategy Research Reports"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                    Strategy Research Reports
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dive into our in-depth research reports on performance
                    management trends.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Webinars"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                    Webinars
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join our expert-led webinars on strategic planning and
                    execution.
                  </p>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Case Studies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#175ea8]">
                    Case Studies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover how leading organizations achieve success with
                    StrategyPro.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-700 dark:text-gray-400">
          © 2024 StrategyPro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
