import { useState } from "react";

const AdminDashboard = () => {
  const users = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: i % 2 === 0 ? 'Tenant' : 'Landlord',
  }));

  const pageSize = 5;
  const [page, setPage] = useState(1);

  const paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <h2>All Users</h2>
      {paginatedUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.role}</p>
        </div>
      ))}
      <div>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <span> Page {page} </span>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
