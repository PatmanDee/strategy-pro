"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SuperAdminLayout } from "@/components/dashboard/SuperAdminLayout";
import { Widget } from "@/components/dashboard/Widget";
import { Table } from "@/components/dashboard/Table";
import { Building2, Users, DollarSign, BarChart2 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const companyGrowthData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 180 },
  { name: "May", value: 220 },
  { name: "Jun", value: 270 },
];

const recentCompanies = [
  {
    name: "Acme Corp",
    package: "Enterprise",
    joinedDate: "2023-06-01",
    status: "Active",
  },
  {
    name: "TechSolutions Inc",
    package: "Pro",
    joinedDate: "2023-05-28",
    status: "Active",
  },
  {
    name: "Global Innovations",
    package: "Standard",
    joinedDate: "2023-05-25",
    status: "Pending",
  },
];

export default function SuperAdminPage() {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "SUPER_ADMIN") {
      router.push("/login");
    }
  }, [router]);

  return (
    <SuperAdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Widget
          title="Total Companies"
          value="1,234"
          icon={<Building2 />}
          color="bg-blue-500"
        />
        <Widget
          title="Active Users"
          value="45,678"
          icon={<Users />}
          color="bg-green-500"
        />
        <Widget
          title="Monthly Revenue"
          value="$123,456"
          icon={<DollarSign />}
          color="bg-yellow-500"
        />
        <Widget
          title="Avg. Performance Score"
          value="85%"
          icon={<BarChart2 />}
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Company Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={companyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Companies</h3>
          <Table
            columns={[
              { header: "Name", accessor: "name" },
              { header: "Package", accessor: "package" },
              { header: "Joined Date", accessor: "joinedDate" },
              { header: "Status", accessor: "status" },
            ]}
            data={recentCompanies}
          />
        </div>
      </div>

      {/* Add more sections for licenses, packages, etc. */}
    </SuperAdminLayout>
  );
}
