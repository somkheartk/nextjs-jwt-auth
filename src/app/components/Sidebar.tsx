'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Settings,
  Users,
  BarChart2,
  FileText,
  Package,
  Shield,
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: Home, href: '/dashboard/' },
  { label: 'Users', icon: Users, href: '/dashboard/users' },
  { label: 'Products', icon: Package, href: '/dashboard/products' },
  { label: 'Orders', icon: FileText, href: '/dashboard/orders' },
  { label: 'Reports', icon: BarChart2, href: '/dashboard/reports' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

type SidebarProps = {
  isOpen: boolean;
  isHoverable?: boolean;
};

export default function Sidebar({ isOpen, isHoverable = false }: SidebarProps) {
  return (
    <aside
      className={`
        flex flex-col h-full
        bg-gray-800 text-white
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-16'}
        ${!isOpen && isHoverable ? 'group-hover:w-64' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700 select-none">
        <span className="text-2xl">🧭</span>
        <span
          className={`
            ml-2 font-bold text-lg
            ${isOpen ? 'inline' : isHoverable ? 'hidden group-hover:inline' : 'hidden'}
            transition-opacity duration-300 ease-in-out
          `}
        >
          My App
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map(({ label, icon: Icon, href }, index) => (
          <Link
            href={href}
            key={index}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
          >
            <Icon className="w-5 h-5" />
            <span
              className={`
                text-sm
                ${isOpen ? 'inline' : isHoverable ? 'hidden group-hover:inline' : 'hidden'}
                transition-opacity duration-300 ease-in-out
              `}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
