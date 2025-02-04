import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function SuperAdminDashboard() {
  const { data: session } = useSession();
  const [companies, setCompanies] = useState([]);
  const [customFields, setCustomFields] = useState([]);
  const [customTables, setCustomTables] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [companiesRes, customFieldsRes, customTablesRes] =
        await Promise.all([
          fetch("/api/super-admin/companies"),
          fetch("/api/super-admin/custom-fields"),
          fetch("/api/super-admin/custom-tables"),
        ]);

      const [companiesData, customFieldsData, customTablesData] =
        await Promise.all([
          companiesRes.json(),
          customFieldsRes.json(),
          customTablesRes.json(),
        ]);

      setCompanies(companiesData);
      setCustomFields(customFieldsData);
      setCustomTables(customTablesData);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>

      <h2 className="text-xl mb-2">Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id} className="mb-2">
            {company.name} - Package: {company.package.name}, License:{" "}
            {company.license.key}
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-4 mb-2">Custom Fields</h2>
      <ul>
        {customFields.map((field) => (
          <li key={field.id} className="mb-2">
            {field.modelName}: {field.fieldName} ({field.fieldType})
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-4 mb-2">Custom Tables</h2>
      <ul>
        {customTables.map((table) => (
          <li key={table.id} className="mb-2">
            {table.tableName}
          </li>
        ))}
      </ul>
    </div>
  );
}
