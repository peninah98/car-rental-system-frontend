import type { ReactNode } from 'react';
import { useRole } from '../context/RoleContext';
import DashboardNav from './DashboardNav';

const DashboardLayout = ({ children }: { children:ReactNode }) => {
  const { role, setRole } = useRole();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <DashboardNav role={role} />
      <main className="flex-1 flex flex-col items-center justify-start p-8">
        <div className="mb-8 w-full max-w-2xl flex items-center gap-4 bg-white shadow-lg rounded-xl px-6 py-4">
          <label className="font-semibold text-gray-700">Switch Role:</label>
          <select
            value={role}
            onChange={e => setRole(e.target.value as any)}
            className="border border-orange-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
