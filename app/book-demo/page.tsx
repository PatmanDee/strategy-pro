import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function BookDemoPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#175ea8]">
        Book a Demo
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Schedule Your Personalized Demo</CardTitle>
          <CardDescription>
            Learn how StrategyPro can transform your performance management and
            strategic planning.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Work Email
            </label>
            <Input id="email" type="email" placeholder="john@company.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company Name
            </label>
            <Input id="company" placeholder="Acme Inc." />
          </div>
          <div className="space-y-2">
            <label htmlFor="job-title" className="text-sm font-medium">
              Job Title
            </label>
            <Input id="job-title" placeholder="Manager" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Additional Information
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific needs or questions"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#175ea8] hover:bg-[#1e4b8d]">
            Request Demo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
