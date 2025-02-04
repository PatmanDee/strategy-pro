import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, BarChart3, Target, Users } from "lucide-react";

const aiTools = [
  {
    title: "Strategic Insights Engine",
    description:
      "Leverage AI to analyze performance data and generate strategic recommendations for your team and organization.",
    icon: Brain,
  },
  {
    title: "Predictive Analytics",
    description:
      "Utilize AI-driven predictive models to forecast performance trends and identify areas for improvement.",
    icon: BarChart3,
  },
  {
    title: "Goal Optimization",
    description:
      "AI-powered goal setting and tracking to ensure your objectives are ambitious yet achievable.",
    icon: Target,
  },
  {
    title: "Team Performance Analysis",
    description:
      "Gain deep insights into team dynamics and individual contributions with our AI-driven analysis tools.",
    icon: Users,
  },
];

export default function AIToolkitPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#175ea8]">
        AI-Powered Strategy Toolkit
      </h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Discover how our cutting-edge AI tools can revolutionize your approach
        to performance management and strategic planning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <Icon className="h-12 w-12 mb-4 text-[#175ea8]" />
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Learn how {tool.title} can transform your organization's
                  performance. Contact us for a personalized demo.
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
