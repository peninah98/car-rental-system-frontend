import React from 'react';
import { Link } from 'react-router-dom';

import { Home, User, Building2, BarChart2, List, Users, Key } from 'lucide-react';

const DashboardNav: React.FC<{ role: string }> = ({ role }) => {
  return (
    <aside className="flex flex-col min-h-screen w-64 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white shadow-xl">
      <div className="flex items-center gap-2 px-6 py-6 border-b border-orange-400">
        <Building2 className="w-8 h-8" />
        <span className="text-2xl font-extrabold tracking-wide">Car Rental</span>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-4 pt-6">
        <NavLinkItem to="/dashboard" icon={<Home />} label="Home" />
        {role === 'tenant' && (
          <>
            <NavLinkItem to="/dashboard/properties" icon={<List />} label="Available Properties" />
            <NavLinkItem to="/dashboard/my-rentals" icon={<Key />} label="My Rentals" />
          </>
        )}
        {role === 'landlord' && (
          <>
            <NavLinkItem to="/dashboard/list-property" icon={<Building2 />} label="List Property" />
            <NavLinkItem to="/dashboard/my-properties" icon={<List />} label="My Properties" />
            <NavLinkItem to="/dashboard/applications" icon={<Users />} label="Tenant Applications" />
          </>
        )}
        {role === 'admin' && (
          <>
            <NavLinkItem to="/dashboard/users" icon={<Users />} label="Manage Users" />
            <NavLinkItem to="/dashboard/listings" icon={<List />} label="Property Listings" />
            <NavLinkItem to="/dashboard/analytics" icon={<BarChart2 />} label="Analytics" />
          </>
        )}
      </nav>
      <div className="mt-auto px-4 py-6">
        <Link to="/" className="flex items-center gap-2 text-orange-100 hover:text-white font-semibold transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-9-4h16"/></svg>
          Back to Home
        </Link>
      </div>
    </aside>
  );
};

function NavLinkItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-orange-100 hover:bg-orange-600 hover:text-white transition-colors group"
      style={{ transition: 'all 0.2s' }}
    >
      <span className="text-lg opacity-80 group-hover:opacity-100">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}


export default DashboardNav;
