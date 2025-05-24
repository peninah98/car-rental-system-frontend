import { useState } from "react";
import { Users, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: i % 2 === 0 ? 'Tenant' : 'Landlord',
  }));

  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState(users);

  const paginatedUsers = allUsers.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(allUsers.length / pageSize);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setAllUsers(prev => prev.filter(user => user.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 bg-orange-50 rounded-2xl shadow-lg p-6">
        <Users className="w-12 h-12 text-orange-600 bg-white rounded-full p-2 shadow-md" />
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-1">Admin Dashboard</h2>
          <span className="text-orange-600 font-medium">View & manage platform users</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">All Users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-orange-100 text-orange-700 uppercase text-xs">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-50 transition">
                  <td className="py-3 px-4 font-semibold">{user.id}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold tracking-wide ${user.role === 'Tenant'
                      ? 'bg-orange-200 text-orange-800'
                      : 'bg-blue-200 text-blue-800'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition font-semibold"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-gray-500">No users to display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            className="flex items-center gap-1 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition disabled:opacity-50"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>
          <span className="font-semibold text-gray-700">Page {page} of {totalPages}</span>
          <button
            className="flex items-center gap-1 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition disabled:opacity-50"
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
