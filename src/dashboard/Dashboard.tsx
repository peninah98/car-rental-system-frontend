import { useRole } from '../context/RoleContext';
import DashboardLayout from './Layout';
import TenantDashboard from './Tenant';
import LandlordDashboard from './Landlord';
import AdminDashboard from './Admin';

const Dashboard = () => {
  const { role } = useRole();

  const renderContent = () => {
    switch (role) {
      case 'tenant':
        return <TenantDashboard />;
      case 'landlord':
        return <LandlordDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <div>Select a role.</div>;
    }
  };

  return <DashboardLayout>{renderContent()}</DashboardLayout>;
};

export default Dashboard;
