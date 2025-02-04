import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams just getting started",
    features: [
      "Up to 10 users",
      "Basic Balanced Scorecard",
      "Simple action plans",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing teams with advanced needs",
    features: [
      "Up to 50 users",
      "Advanced Balanced Scorecard",
      "360° assessments",
      "AI-powered insights",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited users",
      "Custom integrations",
      "Advanced AI capabilities",
      "Dedicated account manager",
      "24/7 phone & email support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#175ea8]">
        Pricing Plans
      </h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Choose the perfect plan to elevate your team's performance and strategic
        planning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col ${
              plan.popular ? "border-[#175ea8] border-2" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-base font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular ? "bg-[#175ea8] text-white" : ""
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
