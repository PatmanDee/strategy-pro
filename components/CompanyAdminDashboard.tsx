import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function CompanyAdminDashboard() {
  const { data: session } = useSession();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchResources() {
      const res = await fetch("/api/company-admin/resources");
      const data = await res.json();
      setResources(data);
    }
    fetchResources();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Company Admin Dashboard</h1>
      <h2 className="text-xl mb-2">Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="mb-2">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {resource.title}
            </a>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
