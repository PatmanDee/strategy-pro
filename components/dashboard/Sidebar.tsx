"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Key,
  Package,
  Users,
  BarChart2,
  FileText,
  Settings,
  HelpCircle,
  ClipboardList,
  Zap,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/super-admin" },
  { name: "Companies", icon: Building2, href: "/super-admin/companies" },
  { name: "Licenses", icon: Key, href: "/super-admin/licenses" },
  { name: "Packages", icon: Package, href: "/super-admin/packages" },
  { name: "Users", icon: Users, href: "/super-admin/users" },
  { name: "Analytics", icon: BarChart2, href: "/super-admin/analytics" },
  { name: "Content", icon: FileText, href: "/super-admin/content" },
  { name: "Settings", icon: Settings, href: "/super-admin/settings" },
  { name: "Support", icon: HelpCircle, href: "/super-admin/support" },
  { name: "Audit Logs", icon: ClipboardList, href: "/super-admin/audit-logs" },
  { name: "AI Insights", icon: Zap, href: "/super-admin/ai-insights" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white w-64 h-full shadow-lg">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-bold text-blue-600">StrategyPro</span>
      </div>
      <nav className="mt-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-blue-600 ${
                pathname === item.href ? "bg-gray-100 text-blue-600" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
