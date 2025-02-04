import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const resources = [
  {
    title: "Knowledge Base",
    description:
      "Access our comprehensive library of articles, guides, and best practices.",
    link: "/resources/knowledge-base",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Strategy Research Reports",
    description:
      "Dive into our in-depth research reports on performance management trends.",
    link: "/resources/research-reports",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Webinars",
    description:
      "Join our expert-led webinars on strategic planning and execution.",
    link: "/resources/webinars",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Case Studies",
    description:
      "Discover how leading organizations achieve success with StrategyPro.",
    link: "/resources/case-studies",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#175ea8]">
        Resources
      </h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Explore our collection of resources designed to help you master
        performance management and strategic planning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col">
            <img
              src={resource.image || "/placeholder.svg"}
              alt={resource.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={resource.link} className="w-full">
                <Button variant="outline" className="w-full">
                  Explore
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
