import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export function ClientDashboard() {
  const { data: session } = useSession();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    async function fetchResources() {
      const res = await fetch("/api/client/resources");
      const data = await res.json();
      setResources(data);
    }
    fetchResources();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Client Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Welcome, {session?.user?.name}!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is your StrategyPro dashboard. Here you can access your
            resources and manage your account.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {resources.map((resource) => (
              <li key={resource.id} className="border p-4 rounded">
                <h3 className="font-bold">{resource.title}</h3>
                <p>{resource.description}</p>
                <Button asChild className="mt-2">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Resource
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
