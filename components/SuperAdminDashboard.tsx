import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type Company = {
  id: string;
  name: string;
  package: { name: string };
  license: { key: string };
};

type DemoRequest = {
  id: string;
  name: string;
  email: string;
  companyName: string;
  message: string;
  status: string;
  createdAt: string;
};

export function SuperAdminDashboard() {
  const { data: session } = useSession();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [newCompanyName, setNewCompanyName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [companiesRes, demoRequestsRes] = await Promise.all([
        fetch("/api/super-admin/companies"),
        fetch("/api/super-admin/demo-requests"),
      ]);
      const companiesData = await companiesRes.json();
      const demoRequestsData = await demoRequestsRes.json();
      setCompanies(companiesData);
      setDemoRequests(demoRequestsData);
    }
    fetchData();
  }, []);

  const handleAddCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/super-admin/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newCompanyName,
        packageId: "default-package-id", // You should replace this with actual package selection
        licenseKey: "auto-generated", // You may want to generate this on the server
      }),
    });
    if (response.ok) {
      const newCompany = await response.json();
      setCompanies([...companies, newCompany]);
      setNewCompanyName("");
    } else {
      alert("Error adding company");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Super Admin Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Company</CardTitle>
        </CardHeader>
        <form onSubmit={handleAddCompany}>
          <CardContent>
            <Input
              placeholder="Company Name"
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
              className="mb-4"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Add Company</Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {companies.map((company) => (
              <li key={company.id} className="mb-2">
                {company.name} - Package: {company.package.name}, License:{" "}
                {company.license.key}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Demo Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {demoRequests.map((request) => (
              <li key={request.id} className="mb-4 p-4 border rounded">
                <p>
                  <strong>Name:</strong> {request.name}
                </p>
                <p>
                  <strong>Email:</strong> {request.email}
                </p>
                <p>
                  <strong>Company:</strong> {request.companyName}
                </p>
                <p>
                  <strong>Message:</strong> {request.message}
                </p>
                <p>
                  <strong>Status:</strong> {request.status}
                </p>
                <p>
                  <strong>Requested at:</strong>{" "}
                  {new Date(request.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
