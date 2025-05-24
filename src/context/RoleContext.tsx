import React, { createContext, useState, useContext } from 'react';

export const RoleContext = createContext({
  role: 'tenant' as 'tenant' | 'landlord' | 'admin',
  setRole: (role: 'tenant' | 'landlord' | 'admin') => {},
});

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<'tenant' | 'landlord' | 'admin'>('tenant');
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
