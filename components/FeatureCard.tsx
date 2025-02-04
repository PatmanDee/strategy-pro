import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      <Icon className="h-12 w-12 mb-4 text-[#175ea8]" />
      <h3 className="text-xl font-bold mb-2 text-[#175ea8]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
