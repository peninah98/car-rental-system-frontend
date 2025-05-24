import { User, Home, MapPin, BadgeDollarSign, Clock } from 'lucide-react';

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
    <div className="space-y-8">
      <div className="flex items-center gap-4 bg-orange-50 rounded-xl shadow p-6">
        <User className="w-12 h-12 text-orange-600 bg-white rounded-full p-2 shadow" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome, {mockData.name}</h2>
          <span className="text-orange-600 font-semibold">Tenant</span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
          <Home className="w-6 h-6 text-orange-500" /> Rented House Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600"><User className="w-5 h-5 text-orange-400" /> <span>Landlord:</span> <span className="font-medium text-gray-800">{mockData.rentedHouse.landlord}</span></div>
          <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-5 h-5 text-orange-400" /> <span>Location:</span> <span className="font-medium text-gray-800">{mockData.rentedHouse.location}</span></div>
          <div className="flex items-center gap-2 text-gray-600"><BadgeDollarSign className="w-5 h-5 text-orange-400" /> <span>Amount:</span> <span className="font-medium text-gray-800">{mockData.rentedHouse.amount}</span></div>
          <div className="flex items-center gap-2 text-gray-600"><Clock className="w-5 h-5 text-orange-400" /> <span>Status:</span> <span className="font-medium text-orange-600 capitalize">{mockData.rentedHouse.status}</span></div>
        </div>
        <div className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition">Cancel Request</button>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
