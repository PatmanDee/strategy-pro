"use client";

import { Target, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";

const performanceData = [
  { name: "Jan", value: 82 },
  { name: "Feb", value: 85 },
  { name: "Mar", value: 83 },
  { name: "Apr", value: 88 },
  { name: "May", value: 85 },
  { name: "Jun", value: 90 },
];

export default function EmployeeDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-500">Track your performance and objectives</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="My Objectives"
            value="8"
            icon={<Target className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Performance Score"
            value="90%"
            change={5.2}
            icon={<TrendingUp className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Completed Tasks"
            value="45"
            icon={<CheckCircle className="h-5 w-5 text-gray-400" />}
          />
          <MetricCard
            title="Pending Reviews"
            value="2"
            icon={<Clock className="h-5 w-5 text-gray-400" />}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">My Performance Trend</h2>
            <div className="mt-4">
              <PerformanceChart data={performanceData} />
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">Current Objectives</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Improve Customer Satisfaction</p>
                  <p className="text-sm text-gray-500">Due in 2 weeks</p>
                </div>
                <span className="text-green-500">85%</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Complete Training Program</p>
                  <p className="text-sm text-gray-500">Due in 1 month</p>
                </div>
                <span className="text-yellow-500">45%</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Project Milestone 3</p>
                  <p className="text-sm text-gray-500">Due in 3 weeks</p>
                </div>
                <span className="text-blue-500">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
