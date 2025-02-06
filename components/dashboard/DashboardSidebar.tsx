"use client";

import { useRouter } from "next/navigation";
import {
  BarChart3,
  Users,
  Target,
  Settings,
  LogOut,
  Home,
  ClipboardList,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = {
  SUPER_ADMIN: [
    { name: "Overview", href: "/super-admin-dashboard", icon: Home },
    {
      name: "Companies",
      href: "/super-admin-dashboard/companies",
      icon: Users,
    },
    {
      name: "Analytics",
      href: "/super-admin-dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      href: "/super-admin-dashboard/settings",
      icon: Settings,
    },
  ],
  COMPANY_ADMIN: [
    { name: "Overview", href: "/company-admin-dashboard", icon: Home },
    {
      name: "Team Performance",
      href: "/company-admin-dashboard/team",
      icon: Users,
    },
    {
      name: "Scorecards",
      href: "/company-admin-dashboard/scorecards",
      icon: Target,
    },
    {
      name: "Reports",
      href: "/company-admin-dashboard/reports",
      icon: ClipboardList,
    },
    {
      name: "Settings",
      href: "/company-admin-dashboard/settings",
      icon: Settings,
    },
  ],
  MANAGER: [
    { name: "Overview", href: "/manager-dashboard", icon: Home },
    { name: "Team Members", href: "/manager-dashboard/team", icon: Users },
    { name: "Objectives", href: "/manager-dashboard/objectives", icon: Target },
    {
      name: "Performance",
      href: "/manager-dashboard/performance",
      icon: TrendingUp,
    },
  ],
  EMPLOYEE: [
    { name: "Overview", href: "/employee-dashboard", icon: Home },
    {
      name: "My Objectives",
      href: "/employee-dashboard/objectives",
      icon: Target,
    },
    {
      name: "My Performance",
      href: "/employee-dashboard/performance",
      icon: TrendingUp,
    },
    { name: "Calendar", href: "/employee-dashboard/calendar", icon: Calendar },
  ],
};

export function DashboardSidebar() {
  const router = useRouter();
  const userRole = localStorage.getItem("userRole") || "EMPLOYEE";
  const links = navigation[userRole as keyof typeof navigation];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    router.push("/login");
  };

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex h-16 items-center px-6 border-b border-gray-200">
          <span className="text-2xl font-bold text-[#175ea8]">StrategyPro</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 font-normal hover:bg-gray-100",
                    "active:bg-gray-100"
                  )}
                  onClick={() => router.push(item.href)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Button>
              );
            })}
          </div>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
