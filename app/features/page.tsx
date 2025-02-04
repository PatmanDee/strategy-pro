import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Target,
  Users,
  Trello,
  BarChart3,
  LineChart,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    title: "Balanced Scorecard",
    description:
      "Align and track your organization's strategy across multiple perspectives for comprehensive performance management.",
    icon: Target,
    benefits: [
      "Align strategic objectives",
      "Track key performance indicators",
      "Visualize cause-and-effect relationships",
    ],
  },
  {
    title: "360° Assessment",
    description:
      "Gain comprehensive insights with multi-source feedback for holistic performance evaluation.",
    icon: Users,
    benefits: [
      "Collect feedback from multiple sources",
      "Identify strengths and areas for improvement",
      "Foster a culture of continuous feedback",
    ],
  },
  {
    title: "Action Plans",
    description:
      "Create, assign, and track strategic action plans with our intuitive Kanban-style board.",
    icon: Trello,
    benefits: [
      "Break down strategic objectives into actionable tasks",
      "Assign responsibilities and deadlines",
      "Monitor progress in real-time",
    ],
  },
  {
    title: "Performance Analytics",
    description:
      "Gain actionable insights with powerful, real-time analytics and customizable reports.",
    icon: BarChart3,
    benefits: [
      "Visualize performance trends",
      "Generate custom reports",
      "Make data-driven decisions",
    ],
  },
  {
    title: "Goal Tracking",
    description:
      "Set, monitor, and achieve individual and team goals with ease.",
    icon: LineChart,
    benefits: [
      "Align individual goals with organizational objectives",
      "Track progress towards goals in real-time",
      "Celebrate achievements and milestones",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#175ea8]">
        StrategyPro Features
      </h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Explore our comprehensive suite of features designed to elevate your
        performance management and strategic planning processes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Icon className="h-12 w-12 mb-4 text-[#175ea8]" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
