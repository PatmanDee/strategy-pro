import { Bell, User, LogOut } from "lucide-react";

interface TopNavBarProps {
  onLogout: () => void;
}

export function TopNavBar({ onLogout }: TopNavBarProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Super Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-gray-900 mr-4">
              <User className="h-6 w-6 mr-2" />
              <span>Admin User</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center text-red-600 hover:text-red-800"
            >
              <LogOut className="h-6 w-6 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
