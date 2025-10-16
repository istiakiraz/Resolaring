// src/components/PrimaryButton.jsx
import React from 'react';
import { Link } from 'react-router';

export default function PrimaryButton({
  to = '',
  children,
  icon: Icon,
  className = '',
  ...props
}) {
  return (
    <Link
      to={to}
      className={`bg-yellow-400 duration-500 text-black text-sm px-4 py-3 flex gap-2 items-center rounded-full font-medium hover:bg-yellow-500 transition ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={15} />}
    </Link>
  );
}
