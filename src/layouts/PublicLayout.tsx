import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { usePortfolio } from '../context/PortfolioContext';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

export const PublicLayout: React.FC = () => {
  const { data, loading, refresh } = usePortfolio();

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-canvas">
        <RefreshCw className="h-6 w-6 animate-spin text-brand" />
        <p className="text-sm text-muted">Loading portfolio…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-canvas px-5 text-center">
        <h1 className="text-2xl">We couldn't load the portfolio</h1>
        <p className="max-w-md text-muted">Please check your connection and try again.</p>
        <button onClick={refresh} className="btn-primary">Try again</button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar profile={data.profile} />
      <main className="flex-1 animate-fadeIn">
        <Outlet />
      </main>
      <Footer profile={data.profile} />
    </div>
  );
};
