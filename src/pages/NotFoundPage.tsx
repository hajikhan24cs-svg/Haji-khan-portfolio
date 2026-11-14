import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundPageProps {
  message?: string;
  backTo?: string;
  backLabel?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  message = "The page you're looking for doesn't exist.",
  backTo = '/',
  backLabel = 'Back to home',
}) => (
  <div className="container-page flex flex-col items-center py-28 text-center">
    <p className="text-sm font-semibold text-brand">404</p>
    <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
    <p className="mt-4 max-w-md text-muted">{message}</p>
    <Link to={backTo} className="btn-primary mt-8">{backLabel}</Link>
  </div>
);
