import { useState } from "react";
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

const AdminDashboard = () => {
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: i % 2 === 0 ? 'Tenant' : 'Landlord',
  }));

  const pageSize = 5;
  const [page, setPage] = useState(1);

  const paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(users.length / pageSize);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 bg-orange-50 rounded-xl shadow p-6">
        <Users className="w-12 h-12 text-orange-600 bg-white rounded-full p-2 shadow" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Admin Dashboard</h2>
          <span className="text-orange-600 font-semibold">Manage all users</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">All Users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-orange-100 text-orange-700">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-50">
                  <td className="py-2 px-4 font-semibold">{user.id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${user.role === 'Tenant' ? 'bg-orange-200 text-orange-700' : 'bg-blue-200 text-blue-700'}`}>{user.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded bg-orange-100 text-orange-700 hover:bg-orange-200 font-semibold transition"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <span className="font-semibold text-gray-700">Page {page} of {totalPages}</span>
          <button
            className="flex items-center gap-1 px-3 py-1 rounded bg-orange-100 text-orange-700 hover:bg-orange-200 font-semibold transition"
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
