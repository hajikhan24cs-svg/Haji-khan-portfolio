import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { PortfolioData } from '../types';

export type PublicData = Omit<PortfolioData, 'messages' | 'mediaAssets'>;

interface PortfolioContextValue {
  data: PublicData | null;
  loading: boolean;
  error: boolean;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PublicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/public/data');
      if (!res.ok) throw new Error('Request failed');
      setData(await res.json());
      setError(false);
    } catch (err) {
      console.error('Error fetching public portfolio data:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (data?.profile?.seoDefaults?.title) {
      document.title = data.profile.seoDefaults.title;
    }
  }, [data]);

  return (
    <PortfolioContext.Provider value={{ data, loading, error, refresh }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used inside PortfolioProvider');
  return ctx;
}

/** For pages rendered inside PublicLayout, where data is guaranteed to be loaded. */
export function usePublicData(): PublicData {
  const { data } = usePortfolio();
  if (!data) throw new Error('Portfolio data not loaded');
  return data;
}
