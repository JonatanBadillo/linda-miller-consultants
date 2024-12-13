import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-[#555555] hover:text-[#007B8A] transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}