const LandlordDashboard = () => {
  const houses = [
    { id: 1, name: 'House 1', location: 'Kacyiru' },
    { id: 2, name: 'House 2', location: 'Gisozi' },
  ];

  const requests = [
    { tenant: 'Alice', house: 'House 1', status: 'pending' },
  ];

  return (
    <div>
      <h2>Landlord Profile</h2>
      <h3>Your Houses</h3>
      {houses.map((house) => (
        <div key={house.id}>
          <p>{house.name} - {house.location}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <h3>Requests</h3>
      {requests.map((req, i) => (
        <div key={i}>
          <p>{req.tenant} requested {req.house}</p>
          <button>Approve</button>
          <button>Deny</button>
        </div>
      ))}
    </div>
  );
};

export default LandlordDashboard;
