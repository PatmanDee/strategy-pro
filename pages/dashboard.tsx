import { useSession } from "next-auth/react";
import { SuperAdminDashboard } from "@/components/SuperAdminDashboard";
import { CompanyAdminDashboard } from "@/components/CompanyAdminDashboard";
import { EmployeeDashboard } from "@/components/EmployeeDashboard";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Access Denied</div>;
  }

  switch (session.user.role) {
    case "SUPER_ADMIN":
      return <SuperAdminDashboard />;
    case "COMPANY_ADMIN":
      return <CompanyAdminDashboard />;
    case "MANAGER":
    case "EMPLOYEE":
      return <EmployeeDashboard />;
    default:
      return <div>Invalid user role</div>;
  }
}
