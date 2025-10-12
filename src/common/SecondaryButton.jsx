import React from 'react';
import { Link } from 'react-router';

export default function SecondaryButton({ to = '#', children, className = '', ...props }) {
  return (
    <Link
      to={to}
      className={`text-white rounded-full py-2.5 px-4 border border-white/10 bg-white/10 hover:bg-white/20 transition inline-block text-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
