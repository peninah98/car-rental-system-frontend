import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav: React.FC<{ role: string }> = ({ role }) => {
  return (
    <nav className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md w-56 min-h-full">
      <h3 className="font-bold text-lg mb-2">Dashboard Navigation</h3>
      <Link to="/dashboard" className="hover:underline">Home</Link>
      {role === 'tenant' && (
        <>
          <Link to="/dashboard/properties" className="hover:underline">Available Properties</Link>
          <Link to="/dashboard/my-rentals" className="hover:underline">My Rentals</Link>
        </>
      )}
      {role === 'landlord' && (
        <>
          <Link to="/dashboard/list-property" className="hover:underline">List Property</Link>
          <Link to="/dashboard/my-properties" className="hover:underline">My Properties</Link>
          <Link to="/dashboard/applications" className="hover:underline">Tenant Applications</Link>
        </>
      )}
      {role === 'admin' && (
        <>
          <Link to="/dashboard/users" className="hover:underline">Manage Users</Link>
          <Link to="/dashboard/listings" className="hover:underline">Property Listings</Link>
          <Link to="/dashboard/analytics" className="hover:underline">Analytics</Link>
        </>
      )}
      <Link to="/" className="mt-4 text-orange-600 font-semibold hover:underline">Back to Home</Link>
    </nav>
  );
};

export default DashboardNav;
