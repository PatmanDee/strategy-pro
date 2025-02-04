import { useSession } from "next-auth/react";

export function EmployeeDashboard() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <p>Welcome, {session?.user?.name}!</p>
      {/* Add more employee-specific content here */}
    </div>
  );
}
