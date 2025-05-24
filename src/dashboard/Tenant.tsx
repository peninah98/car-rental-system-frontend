const TenantDashboard = () => {
  const mockData = {
    name: 'John Doe',
    rentedHouse: {
      landlord: 'Jane Smith',
      location: 'Downtown Kigali',
      amount: '150,000 Rwf',
      status: 'pending',
    },
  };

  return (
    <div>
      <h2>Tenant Profile</h2>
      <p>Name: {mockData.name}</p>
      <h3>Rented House Info</h3>
      <p>Landlord: {mockData.rentedHouse.landlord}</p>
      <p>Location: {mockData.rentedHouse.location}</p>
      <p>Amount: {mockData.rentedHouse.amount}</p>
      <p>Status: {mockData.rentedHouse.status}</p>
      <button>Cancel Request</button>
    </div>
  );
};
export default TenantDashboard;
