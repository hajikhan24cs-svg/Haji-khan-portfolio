import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { usePortfolio } from '../context/PortfolioContext';

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const { refresh } = usePortfolio();
  const [authToken, setAuthToken] = useState<string | null>(() => localStorage.getItem('admin_token'));

  const handleLoginSuccess = (token: string) => {
    setAuthToken(token);
    localStorage.setItem('admin_token', token);
  };

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('admin_token');
  };

  if (authToken) {
    return <AdminDashboard authToken={authToken} onLogout={handleLogout} onRefreshPublicData={refresh} />;
  }
  return <AdminLogin onLoginSuccess={handleLoginSuccess} onCancel={() => navigate('/')} />;
};
