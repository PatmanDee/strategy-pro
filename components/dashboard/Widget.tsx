import type React from "react";

interface WidgetProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export function Widget({ title, value, icon, color }: WidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${color} text-white mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
