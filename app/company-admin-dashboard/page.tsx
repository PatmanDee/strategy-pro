"use client";

import { Users, Target, TrendingUp, Calendar } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";

const performanceData = [
  { name: "Jan", value: 85 },
  { name: "Feb", value: 82 },
  { name: "Mar", value: 88 },
  { name: "Apr", value: 85 },
  { name: "May", value: 90 },
  { name: "Jun", value: 87 },
];

export default function CompanyAdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Company Dashboard
          </h1>
          <p className="text-gray-500">
            Monitor your company&apos;s performance and metrics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Employees"
            value="124"
            change={5.6}
            icon={<Users className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Active Objectives"
            value="45"
            change={2.3}
            icon={<Target className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Performance Score"
            value="85%"
            change={3.2}
            icon={<TrendingUp className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Reviews Due"
            value="12"
            icon={<Calendar className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">Performance Trend</h2>
            <div className="mt-4">
              <PerformanceChart data={performanceData} />
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">Balanced Scorecard</h2>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-medium">Financial</span>
                <span className="text-[#175ea8]">85%</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-medium">Customer</span>
                <span className="text-[#175ea8]">78%</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-medium">Internal Process</span>
                <span className="text-[#175ea8]">92%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Learning & Growth</span>
                <span className="text-[#175ea8]">88%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
