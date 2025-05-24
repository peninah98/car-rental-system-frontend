import React from 'react';
import { useRole } from '../context/RoleContext';
import DashboardNav from './DashboardNav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { role, setRole } = useRole();

  return (
    <div>
      <DashboardNav role={''} />
      <div className="p-4">
        <div className="mb-4">
          <label>Switch Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value as any)}>
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
