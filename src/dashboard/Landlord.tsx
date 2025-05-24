import { Building2, MapPin, Edit, Trash2, Users, Check, X } from 'lucide-react';

const LandlordDashboard = () => {
  const houses = [
    { id: 1, name: 'House 1', location: 'Kacyiru' },
    { id: 2, name: 'House 2', location: 'Gisozi' },
  ];

  const requests = [
    { tenant: 'Alice', house: 'House 1', status: 'pending' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 bg-orange-50 rounded-xl shadow p-6">
        <Building2 className="w-12 h-12 text-orange-600 bg-white rounded-full p-2 shadow" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Landlord Dashboard</h2>
          <span className="text-orange-600 font-semibold">Manage your properties and requests</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-orange-500" /> Your Houses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {houses.map((house) => (
            <div key={house.id} className="border rounded-lg p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-gray-800">{house.name}</span>
                <span className="text-gray-500">- {house.location}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded hover:bg-orange-200 transition"><Edit className="w-4 h-4" /> Edit</button>
                <button className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"><Trash2 className="w-4 h-4" /> Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-orange-500" /> Requests
        </h3>
        <div className="space-y-3">
          {requests.map((req, i) => (
            <div key={i} className="flex items-center justify-between border rounded-lg p-3">
              <span className="text-gray-700">{req.tenant} requested <b>{req.house}</b></span>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200 transition"><Check className="w-4 h-4" /> Approve</button>
                <button className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"><X className="w-4 h-4" /> Deny</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
